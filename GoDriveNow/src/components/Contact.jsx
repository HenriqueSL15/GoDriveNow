function Contact({ id }) {
  function submitContactInfo(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const checkbox = document.getElementById("checkbox");

    if (checkbox.checked) {
      const fullMessage = {
        name: name,
        email: email,
        message: message,
      };
    } else {
      console.log(
        "Dados não foram enviados. O usuário não marcou a caixa de acordo com os termos"
      );
    }
  }

  return (
    <div id={id} className="flex flex-col justify-center">
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
