import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

function Question({ question, onAnswer, currentIndex, totalQuestions }) {
  const [answer, setAnswer] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(answer); // Envia a resposta para o componente pai
    setAnswer(""); // Reseta a resposta após enviar
  };

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
            selected={selectedDate}
            dateFormat={"dd/MM/yyyy"}
            locale={ptBR}
            onChange={(date) => setSelectedDate(date)}
            className="w-full mb-14 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
            placeholderText={question.placeholder}
          />
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
