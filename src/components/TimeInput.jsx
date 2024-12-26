import React, { useState } from "react";

function TimeInput() {
  const [time, setTime] = useState("08:00"); // Valor inicial
  const [error, setError] = useState("");

  const handleTimeChange = (e) => {
    const value = e.target.value;

    // Verifica se a hora está dentro do intervalo permitido (08:00 - 18:00)
    const [hours, minutes] = value.split(":");
    if (
      parseInt(hours) < 8 ||
      parseInt(hours) > 18 ||
      (parseInt(hours) === 18 && parseInt(minutes) > 0)
    ) {
      setError("O horário deve estar entre 08:00 e 18:00.");
    } else {
      setError(""); // Limpa o erro quando a hora está no intervalo correto
      setTime(value); // Atualiza o valor
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!time) {
      setError("A hora é obrigatória!");
    } else {
      console.log("Hora selecionada:", time);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="time">Escolha a hora:</label>
        <div className="flex items-center">
          <input
            type="text"
            id="time"
            value={time}
            onChange={handleTimeChange}
            placeholder="08:00"
            className="border border-gray-300 rounded p-2 mr-2"
            pattern="([01]?[0-9]|2[0-3]):([0-5][0-9])"
            required
          />
          <span className="text-gray-500">Ex: 08:00</span>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default TimeInput;
