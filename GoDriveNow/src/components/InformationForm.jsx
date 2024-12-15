import "../App.css";
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Question from "./Question.jsx";
import { useState, useEffect } from "react";

function InformationForm() {
  const location = useLocation();
  const product = location.state.product;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(null);

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
  const handleAnswer = (answer, err) => {
    if (err) {
      console.log("Teve um erro");
    } else {
      setAnswers([...answers, answer]); // Armazena a resposta
      setCurrentIndex(currentIndex + 1); // Avança para a próxima pergunta
      setError(null); // Limpa o erro após resposta válida
    }
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
        console.log(answers)
      )}
      <Footer></Footer>
    </>
  );
}

export default InformationForm;
