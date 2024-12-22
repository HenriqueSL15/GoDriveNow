import "../App.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Question from "./Question.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function InformationForm() {
  const location = useLocation();
  const product = location.state.product;

  const [isOpen, setIsOpen] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState();

  const navigate = useNavigate();

  const [hours, setHours] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(null);

  const times = {
    8: "08:00",
    8.5: "08:30",
    9: "09:00",
    9.5: "09:30",
    10: "10:00",
    10.5: "10:30",
    11: "11:00",
    11.5: "11:30",
    12: "12:00",
    12.5: "12:30",
    13: "13:00",
    13.5: "13:30",
    14: "14:00",
    14.5: "14:30",
    15: "15:00",
    15.5: "15:30",
    16: "16:00",
    16.5: "16:30",
    17: "17:00",
    17.5: "17:30",
    18: "18:00",
  };

  //Lista de perguntas
  const questions = [
    { text: "Deseja alugar em qual data?", placeholder: "Escolha a data" },
    {
      text: "Em qual data deseja terminar o aluguel?",
      placeholder: "Escolha a data",
    },
    {
      text: "Que horas deseja pegar o carro?",
      placeholder: "Escolha o horário",
    },
    {
      text: "Que horas deseja devolver o carro?",
      placeholder: "Escolha o horário",
    },
    {
      text: "Qual será o método de pagamento?",
      placeholder: "",
    },
    {
      text: "Informações para contato/identificação",
      placeholder: "",
    },
  ];

  //Avalia a resposta enviada para esse ojeto
  const handleAnswer = (answer, err, hours) => {
    if (err) {
      console.error(err);
    } else {
      setHours(hours);
      setAnswers([...answers, answer]); // Armazena a resposta
      setCurrentIndex(currentIndex + 1); // Avança para a próxima pergunta
      setError(null); // Limpa o erro após resposta válida
    }
  };

  // Trata a informação extensa da data e retorna o dia/mês/ano para mais fácil compreensão
  const handleDate = (date) => {
    const data = new Date(date);

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };

  const sendToDatabase = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/sendToDatabase",
        {
          dataInicial: answers[0],
          dataFinal: answers[1],
          horarioInicial: answers[2],
          horarioFinal: answers[3],
          metodoPagamento: answers[4],
          nome: answers[5].name,
          cpf: answers[5].cpf,
          telefone: answers[5].phoneNumber,
        }
      );
      setIsOpen(true);
      setPopUpMessage([
        "Seus dados foram enviados",
        "Agora você será redirecionado para a tela principal",
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  // De acordo com o valor de horário(Ex: 12.5) ele compara para qual horário esse valor seria equivalente(Ex: "12:30")
  const handleTime = (time) => {
    // Converte a chave para string porque as chaves de `times` são strings
    const found = Object.entries(times).find(([key]) => key === String(time));
    return found ? found[1] : "Horário inválido"; // Retorna o valor ou uma mensagem de erro
  };

  return (
    <>
      <Header></Header>
      {currentIndex < questions.length ? (
        <Question
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
        />
      ) : (
        <div className="flex justify-center">
          {isOpen && (
            <div className="flex items-center justify-center bg-gray-100">
              {/* Pop-up (Modal) */}

              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-1/3">
                  {/* Header do modal */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold font-title">
                      {popUpMessage[0]}
                    </h2>
                  </div>

                  {/* Conteúdo do modal */}
                  <div className="p-4">
                    <p className="font-title font-medium">{popUpMessage[1]}</p>
                  </div>

                  {/* Footer do modal */}
                  <div className="flex justify-center  p-4 border-t">
                    <button
                      type="button"
                      className="px-4 py-2 mr-2 w-20 text-gray-500 bg-gray-200 rounded hover:bg-gray-500 hover:text-gray-100 transition-all"
                      onClick={() => navigate("/")}
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col shadow-xl w-1/2 mt-5 mb-10 ">
            <h1 className="font-title text-center font-bold text-lg mb-5">
              Resumo das informações
            </h1>
            <div className="font-title py-3 px-5">
              <h1 className="font-medium pl-1">Nome Completo</h1>
              <p className="border rounded p-2">{answers[5].name}</p>
            </div>
            <div className="font-title py-3 px-5">
              <h1 className="font-medium pl-1">Número de Telefone</h1>
              <p className="border rounded p-2">{answers[5].phoneNumber}</p>
            </div>
            <div className="font-title py-3 px-5">
              <h1 className="font-medium pl-1">CPF</h1>
              <p className="border rounded p-2">{answers[5].cpf}</p>
            </div>
            <div className="font-title py-3 px-5">
              <h1 className="font-medium pl-1">Data inicial do aluguel</h1>
              <p className="border rounded p-2">{handleDate(answers[0])}</p>
            </div>
            <div className="font-title py-3 px-5">
              <h1 className="font-medium pl-1">Horário inicial do aluguel</h1>
              <p className="border rounded p-2">{handleTime(answers[2])}</p>
            </div>
            <div className="font-title py-3 px-5">
              <h1 className="font-medium pl-1">Data final do aluguel</h1>
              <p className="border rounded p-2">{handleDate(answers[1])}</p>
            </div>
            <div className="font-title py-3 px-5">
              <h1 className="font-medium pl-1">Horário final do aluguel</h1>
              <p className="border rounded p-2">{handleTime(answers[3])}</p>
            </div>
            <div className="font-title py-3 px-5">
              <h1 className="font-medium pl-1">Preço por hora total</h1>
              <p className="border rounded p-2">
                {console.log(hours)}
                R$ {hours * product.price},00 (Horas: {hours} / Preço por hora:
                R$
                {product.price},00)
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="px-5 py-2 m-5 border border-black font-title font-medium hover:border-white hover:text-white hover:bg-black transition-all"
                onClick={sendToDatabase}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
}

export default InformationForm;
