import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

function Question({ question, onAnswer, currentIndex, totalQuestions }) {
  //Variáveis das respostas
  const [answer, setAnswer] = useState("");
  const [selectedInitialDate, setSelectedInitialDate] = useState(null);
  const [selectedFinalDate, setSelectedFinalDate] = useState(null);

  const initialTimeRef = useRef();
  const finalTimeRef = useRef();

  // Armazena o dia atual
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Limpa as horas para comparar apenas o dia/mês/ano

  const [initialTime, setInitialTime] = useState(null);
  const [finalTime, setFinalTime] = useState("choose");

  let errorToSend = false;

  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const [isFocus, setIsFocus] = useState(false);

  const [clickedPix, setClickedPix] = useState(false);
  const [clickedPaymentOnTime, setClickedPaymentOnTime] = useState(false);

  const [popUpMessage, setPopUpMessage] = useState([]);

  const [credit, setCredit] = useState(null);

  const [activeButton, setActiveButton] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  //Ativa o pop up
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Altera a preview do horário dependendo da escolha
  const handleTimeChange = (event) => {
    if (question.text === "Que horas deseja pegar o carro?") {
      setInitialTime(event.target.value);
    } else if (question.text === "Que horas deseja devolver o carro?") {
      if (selectedInitialDate.getTime() != selectedFinalDate.getTime()) {
        setFinalTime(event.target.value);
      } else {
        if (
          Number(initialTime) >= Number(event.target.value) ||
          event.target.value == "choose"
        ) {
          Array.from(event.target).map((e) => {
            if (e.value == initialTime) {
              setPopUpMessage([
                "Horário escolhido é inválido",
                `Escolha um horário posterior a ${e.label}`,
              ]);
            }
          });
          setIsOpen(true);
        } else {
          setFinalTime(event.target.value);
        }
      }
    }
  };

  // Possibilita a opção "Escolha uma opção" de aparecer
  const handleFocus = () => {
    setIsFocus(true);
  };

  // Impossibilita a opção "Escolha uma opção" de aparecer
  const handleBlur = () => {
    setIsFocus(false);
  };

  //Função que atualiza as mudanças de texto no input
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Permite apenas números (removendo qualquer caractere não numérico)
    const numericValue = value.replace(/[^0-9]/g, "");

    // Limita o valor a no máximo 11 caracteres e separa os dois inputs que podem usar essa função
    if (name == "cpf" && numericValue.length <= 11) {
      setCpf(numericValue);
    } else if (name == "phoneNumber" && numericValue.length <= 11) {
      setPhoneNumber(numericValue);
    }
  };

  //Função que manda as informações para o objeto pai
  const handleSubmit = (e) => {
    // Verifica se existe algum campo em branco
    if (question.text === "Deseja alugar em qual data?") {
      if (selectedInitialDate == null) {
        errorToSend = true;
        setPopUpMessage([
          "Data não selecionada",
          "Por favor, selecione uma data para continuar.",
        ]);
      } else if (selectedInitialDate.getTime() < today.getTime()) {
        errorToSend = true;
        setPopUpMessage([
          "Data inválida",
          "A data selecionada não pode ser anterior ao dia atual.",
        ]);
      }
    } else if (question.text == "Em qual data deseja terminar o aluguel?") {
      if (selectedFinalDate == null) {
        errorToSend = true;
        setPopUpMessage([
          "Data não selecionada",
          "Por favor, selecione uma data para continuar.",
        ]);
      } else if (selectedFinalDate.getTime() < selectedInitialDate.getTime()) {
        errorToSend = true;
        setPopUpMessage([
          "Data inválida",
          "A data selecionada não pode ser anterior a data inicial.",
        ]);
      }
    } else if (
      !clickedPaymentOnTime &&
      !clickedPix &&
      question.text == "Qual será o método de pagamento?"
    ) {
      errorToSend = true;
      setPopUpMessage([
        "O método de pagamento não foi selecionado",
        "Selecione o método de pagamento para poder continuar",
      ]);
    } else if (
      question.text == "Informações para contato/identificação" &&
      (!name || !cpf || !phoneNumber)
    ) {
      errorToSend = true;
      setPopUpMessage([
        "Um ou mais campos estão vazios",
        "Preencha todos os campos requisitados para poder continuar",
      ]);
    }
    if (errorToSend) {
      setIsOpen(true);
    }

    //Escolhe qual variável enviar dependendo da pergunta
    let answerToSend = "";

    if (question.text === "Deseja alugar em qual data?") {
      answerToSend = selectedInitialDate;
    } else if (question.text === "Em qual data deseja terminar o aluguel?") {
      answerToSend = selectedFinalDate;
    } else if (question.text === "Que horas deseja pegar o carro?") {
      answerToSend = initialTime;
    } else if (question.text === "Que horas deseja devolver o carro?") {
      answerToSend = finalTime;
    } else if (question.text === "Qual será o método de pagamento?") {
      answerToSend = clickedPix ? "pix" : "payment on time";
    } else if (question.text === "Informações para contato/identificação") {
      answerToSend = {
        name: name,
        phoneNumber: Number(phoneNumber),
        cpf: Number(cpf),
      };
    }

    // Chama a função onAnswer passando a resposta correta
    onAnswer(answerToSend, errorToSend);
  };

  //Função que copia um texto para a área de transferência
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text); // Copia o texto para a área de transferência
    } catch (err) {
      console.error("Falha ao copiar o texto: ", err);
    }
    setIsOpen(true);
    setPopUpMessage([
      "Chave pix copiada com sucesso",
      "A chave pix foi copiada para a sua área de transferência",
    ]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-96 bg-white flex items-center justify-center"
    >
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
                  onClick={togglePopup}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg shadow-gray- w-1/2 justify-center items-center">
        <h2 className="text-lg mb-6 font-semibold text-gray-800">
          {question.text}
        </h2>
        {question.text == "Deseja alugar em qual data?" ? (
          <div>
            <DatePicker
              selected={selectedInitialDate}
              dateFormat={"dd/MM/yyyy"}
              locale={ptBR}
              onChange={(date) => setSelectedInitialDate(date)}
              className="w-full mb-14 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
              placeholderText={question.placeholder}
            />
          </div>
        ) : question.text === "Que horas deseja pegar o carro?" ? (
          <div className="relative">
            <select
              className="mb-5 bg-white border text-center border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:border-none cursor-pointer appearance-none"
              onChange={handleTimeChange}
              value={initialTime}
              required
            >
              <option selected value="choose">
                Escolha um horário
              </option>
              <option value={8}>08:00</option>
              <option value={8.5}>08:30</option>
              <option value={9}>09:00</option>
              <option value={9.5}>09:30</option>
              <option value={10}>10:00</option>
              <option value={10.5}>10:30</option>
              <option value={11}>11:00</option>
              <option value={11.5}>11:30</option>
              <option value={12}>12:00</option>
              <option value={12.5}>12:30</option>
              <option value={13}>13:00</option>
              <option value={13.5}>13:30</option>
              <option value={14}>14:00</option>
              <option value={14.5}>14:30</option>
              <option value={15}>15:00</option>
              <option value={15.5}>15:30</option>
              <option value={16}>16:00</option>
              <option value={16.5}>16:30</option>
              <option value={17}>17:00</option>
              <option value={17.5}>17:30</option>
              <option value={18}>18:00</option>
            </select>
            <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none"></span>
          </div>
        ) : question.text === "Que horas deseja devolver o carro?" ? (
          <div className="relative">
            <select
              className="mb-5 bg-white border text-center border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:border-none cursor-pointer appearance-none"
              onChange={handleTimeChange}
              value={finalTime}
              required
            >
              <option selected value="choose">
                Escolha um horário
              </option>
              <option value={8}>08:00</option>
              <option value={8.5}>08:30</option>
              <option value={9}>09:00</option>
              <option value={9.5}>09:30</option>
              <option value={10}>10:00</option>
              <option value={10.5}>10:30</option>
              <option value={11}>11:00</option>
              <option value={11.5}>11:30</option>
              <option value={12}>12:00</option>
              <option value={12.5}>12:30</option>
              <option value={13}>13:00</option>
              <option value={13.5}>13:30</option>
              <option value={14}>14:00</option>
              <option value={14.5}>14:30</option>
              <option value={15}>15:00</option>
              <option value={15.5}>15:30</option>
              <option value={16}>16:00</option>
              <option value={16.5}>16:30</option>
              <option value={17}>17:00</option>
              <option value={17.5}>17:30</option>
              <option value={18}>18:00</option>
            </select>
            <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none"></span>
          </div>
        ) : question.text == "Em qual data deseja terminar o aluguel?" ? (
          <DatePicker
            selected={selectedFinalDate}
            dateFormat={"dd/MM/yyyy"}
            locale={ptBR}
            onChange={(date) => setSelectedFinalDate(date)}
            className="w-full mb-14 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
            placeholderText={question.placeholder}
          />
        ) : question.text == "Qual será o método de pagamento?" ? (
          <div className="flex flex-col w-full justify-center items-center mb-5 text-center">
            <label
              className={`font-bold border border-black w-1/2 py-3 cursor-pointer justify-center transition-all mb-2 ${
                clickedPix
                  ? `bg-black text-white border-white`
                  : `hover:border-white hover:text-white hover:bg-black`
              }`}
              onClick={() => {
                setClickedPaymentOnTime(false);
                setClickedPix(true);
              }}
            >
              Pix
            </label>
            <label
              className={`font-bold border border-black w-1/2 py-3 cursor-pointer justify-center transition-all ${
                clickedPaymentOnTime
                  ? "bg-black text-white border-white"
                  : "hover:border-white hover:text-white hover:bg-black"
              }`}
              onClick={() => {
                setClickedPaymentOnTime(true);
                setClickedPix(false);
              }}
            >
              Pagamento na hora
            </label>

            {clickedPix && (
              <div className="flex flex-col w-full justify-center items-center">
                <h2
                  className="border rounded border-black mt-6 w-3/4 text-black p-2 cursor-pointer hover:scale-105 transform transition-all"
                  type="text"
                  onClick={(event) => handleCopy(event.target.textContent)}
                >
                  Chave fictícia..........................
                </h2>
                <p className="text-gray-500 mt-1">
                  Clique acima para copiar na sua área de transfêrencia
                </p>
              </div>
            )}
          </div>
        ) : (
          question.text == "Informações para contato/identificação" && (
            <div className="flex w-full justify-between mt-5 mb-10">
              <div className="w-1/2">
                <h2 className="font-title font-medium">
                  Nome Completo (fictício)
                </h2>
                <input
                  className="w-3/4 border border-gray-500 rounded p-2 mt-1"
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={(e) => setName(e.target.value)}
                />

                <h2 className="font-title font-medium  mt-10">
                  Número de telefone (fictício)
                </h2>
                <input
                  className="w-3/4 border border-gray-500 rounded p-2 mt-1"
                  type="text"
                  value={phoneNumber}
                  name="phoneNumber"
                  placeholder="Digite seu telefone (contando DDD)"
                  onChange={handleInputChange}
                  maxLength={11}
                />
              </div>
              <div className="w-1/2">
                <h2 className="font-title font-medium">CPF (fictício)</h2>
                <input
                  className="w-3/4 border border-gray-500 rounded p-2 mt-1"
                  type="text"
                  name="cpf"
                  value={cpf}
                  onChange={handleInputChange}
                  maxLength={11} // Apenas para reforçar, mas já limitado pela lógica
                  placeholder="Digite seu CPF"
                />
              </div>
            </div>
          )
        )}
        <button
          className="w-1/6 h-1/6 p-2 mt-10 rounded-lg bg-black text-white transition-all hover:bg-white border border-white hover:border-black hover:text-black"
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Próximo
        </button>
      </div>
    </form>
  );
}

export default Question;
