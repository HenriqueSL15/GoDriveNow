require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bcrypt = require("bcrypt");

// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Criando o app Express
const app = express();
app.use(cors());
app.use(express.json());

// Modelo MongoDB dos usuários
const InfoSchema = new mongoose.Schema({
  dataInicial: String,
  dataFinal: String,
  horarioInicial: Number,
  horarioFinal: Number,
  metodoPagamento: String,
  nome: String,
  cpf: String,
  telefone: Number,
});
const Info = mongoose.model("users", InfoSchema);

// Modelo MongoDB dos usuários
const MessageSchema = new mongoose.Schema({
  nome: String,
  email: String,
  mensagem: String,
});
const Message = mongoose.model("messages", MessageSchema);

// Rota para inserir dados
app.post("/sendToDatabase", async (req, res) => {
  try {
    //Encriptação do cpf
    const salt = await bcrypt.genSalt(10);
    const hashedCpf = await bcrypt.hash(String(req.body.cpf), salt); // Tipo da senha/valor a ser encriptado precisa ser String

    const user = {
      dataInicial: req.body.dataInicial,
      dataFinal: req.body.dataFinal,
      horarioInicial: req.body.horarioInicial,
      horarioFinal: req.body.horarioFinal,
      metodoPagamento: req.body.metodoPagamento,
      nome: req.body.nome,
      cpf: hashedCpf,
      telefone: req.body.telefone,
    };

    // Criação do usuário no banco
    const savedUser = await Info.create(user);
    res.json(savedUser); // Responde com os dados salvos
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao salvar os dados", error: err });
  }
});

app.post("/sendMessage", async (req, res) => {
  try {
    const information = {
      nome: req.body.nome,
      email: req.body.email,
      mensagem: req.body.mensagem,
    };

    const message = await Message.create(information);
    res.json(message);
  } catch (err) {
    console.error(err);
  }
});

// Iniciando o servidor
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
