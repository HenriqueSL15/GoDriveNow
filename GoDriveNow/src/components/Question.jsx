import React, { useState } from "react";

function Question({ question, onAnswer, currentIndex, totalQuestions }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(answer); // Envia a resposta para o componente pai
    setAnswer(""); // Reseta a resposta após enviar
  };

  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={question.placeholder}
        />
        <button type="submit">Próxima</button>
      </form>
      <p>
        {currentIndex + 1} de {totalQuestions}
      </p>
    </div>
  );
}

export default Question;
