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

  const questions = [
    { text: "Deseja alugar em qual data?", placeholder: "Escolha a data" },
    { text: "Qual é a sua idade?", placeholder: "Digite sua idade" },
    {
      text: "Qual carro você deseja alugar?",
      placeholder: "Digite o nome do carro",
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]); // Armazena a resposta
    setCurrentIndex(currentIndex + 1); // Avança para a próxima pergunta
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
        <div>
          <h2>Obrigado por responder!</h2>
        </div>
      )}
      <Footer></Footer>
    </>
  );
}

export default InformationForm;
