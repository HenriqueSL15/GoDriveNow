import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Contact({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState();
  const submitContactInfo = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const checkbox = document.getElementById("checkbox");

    if (checkbox.checked && name != "" && email != "" && message != "") {
      const fullMessage = {
        nome: name,
        email: email,
        mensagem: message,
      };
      const response = await axios.post(
        "https://go-drive-now-backend.vercel.app/sendMessage",
        {
          nome: fullMessage.nome,
          email: fullMessage.email,
          mensagem: fullMessage.mensagem,
        }
      );
      console.log("Mensagem enviada com sucesso:", response.data);
      setIsOpen(true);
      setPopUpMessage([
        "A mensagem foi enviada com sucesso.",
        "Analisaremos sua mensagem em breve.",
      ]);
    } else if (
      !checkbox.checked &&
      name != "" &&
      email != "" &&
      message != ""
    ) {
      setIsOpen(true);
      setPopUpMessage([
        "Dados não foram enviados.",
        "É necessário marcar a caixa de acordo com os termos.",
      ]);
    } else if (name == "" || email == "" || message == "") {
      setIsOpen(true);
      setPopUpMessage([
        "Existem campos em branco.",
        "É necessário preencher todos os campos requisitados.",
      ]);
    }
  };

  return (
    <div id={id} className="flex flex-col justify-center">
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
                  onClick={() => setIsOpen(false)}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex text-center items-center flex-col mb-20">
        <label className="font-title font-bold text-4xl mb-6 mt-10">
          Entre em Contato
        </label>
        <p className="font-text font-medium w-4/5">
          Estamos aqui para ajudar! Se você tiver alguma dúvida ou precisar de
          assistência, entre em contato conosco.
        </p>
      </div>
      <form className="flex w-full flex-col gap-6">
        <div className="w-full flex flex-col items-center">
          <label className="w-1/3 font-title font-semibold text-lg">Nome</label>
          <input
            className="w-1/3 px-2 py-3 font-text border border-1 border-black"
            type="text"
            id="name"
          ></input>
        </div>
        <div className="w-full flex flex-col items-center">
          <label className="w-1/3 font-title font-semibold text-lg">
            Email
          </label>
          <input
            className="w-1/3 px-2 py-3 font-text border border-1 border-black"
            type="text"
            id="email"
          ></input>
        </div>
        <div className="w-full flex flex-col items-center">
          <label className="w-1/3 font-title font-semibold text-lg">
            Mensagem
          </label>
          <textarea
            className="w-1/3 h-56 px-2 py-3 font-text border border-1 border-black"
            type="text"
            id="message"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center mb-4">
            <input id="checkbox" type="checkbox" required className="mr-2 " />
            <label>Eu aceito os Termos</label>
          </div>
          <div className="flex justify-center">
            <button
              className="text-white border-2 border-transparent bg-black transition-all hover:text-black  hover:bg-white hover:border-black w-24 h-10"
              onClick={submitContactInfo}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
