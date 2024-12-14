import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

function Question({ question, onAnswer, currentIndex, totalQuestions }) {
  const [answer, setAnswer] = useState("");
  const [selectedInitialDate, setSelectedInitialDate] = useState(null);
  const [selectedFinalDate, setSelectedFinalDate] = useState(null);

  const [initialTime, setInitialTime] = useState("08:00");
  const [finalTime, setFinalTime] = useState("08:00");

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (value) => {
    setActiveButton(value);
  };

  const handleTimeChange = (e) => {
    if (question.text == "Que horas deseja pegar o carro?") {
      setInitialTime(e.target.value);
    } else {
      setFinalTime(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifique os valores necessários para a validação
    let errorToSend = false;
    if (
      question.text == "Deseja alugar em qual data?" &&
      selectedInitialDate == null
    ) {
      errorToSend = true;
    } else if (
      question.text == "Em qual data deseja terminar o aluguel?" &&
      selectedFinalDate == null
    ) {
      errorToSend = true;
    }

    let answerToSend = "";

    if (question.text === "Deseja alugar em qual data?") {
      answerToSend = selectedInitialDate;
    } else if (question.text === "Em qual data deseja terminar o aluguel?") {
      answerToSend = selectedFinalDate;
    } else if (question.text === "Que horas deseja pegar o carro?") {
      answerToSend = initialTime;
    } else if (question.text === "Que horas deseja devolver o carro?") {
      answerToSend = finalTime;
    }

    // Chama a função onAnswer passando a resposta correta
    onAnswer(answerToSend, errorToSend);
  };

  useEffect(() => {
    console.log("Error foi atualizado:", selectedFinalDate);
  }, [selectedFinalDate]);

  return (
    <form
      onSubmit={handleSubmit}
      className="h-96 bg-white flex items-center justify-center"
    >
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg shadow-gray- w-1/2 justify-center items-center">
        <h2 className="text-lg mb-6 font-semibold text-gray-800">
          {question.text}
        </h2>
        {question.text == "Deseja alugar em qual data?" ? (
          <DatePicker
            selected={selectedInitialDate}
            dateFormat={"dd/MM/yyyy"}
            locale={ptBR}
            onChange={(date) => setSelectedInitialDate(date)}
            className="w-full mb-14 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
            placeholderText={question.placeholder}
          />
        ) : question.text === "Que horas deseja pegar o carro?" ? (
          <div className="relative">
            <select
              className="mb-5 bg-white border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:border-none cursor-pointer appearance-none"
              onChange={handleTimeChange}
              required
            >
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
            </select>
            <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none"></span>
          </div>
        ) : question.text === "Que horas deseja devolver o carro?" ? (
          <div className="relative">
            <select
              className="mb-5 bg-white border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:border-none cursor-pointer appearance-none"
              onChange={handleTimeChange}
              required
            >
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
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
          <div></div>
        ) : (
          console.log("Acabou")
        )}
        <button
          className="w-1/6 h-1/6 p-2 rounded-lg bg-black text-white transition-all hover:bg-white hover:border hover:border-black hover:text-black"
          type="submit"
        >
          Próximo
        </button>
      </div>
    </form>
  );
}

export default Question;
