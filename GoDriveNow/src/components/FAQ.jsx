import FAQBox from "./FAQBox";

function FAQ({ id, scrollToSection }) {
  return (
    <div id={id} className="flex flex-col mb-40 mt-32">
      <h1 className="font-title text-center font-bold text-4xl mb-20">
        Perguntas Frequentes
      </h1>
      <div className="flex justify-center mb-50">
        <FAQBox></FAQBox>
      </div>
      <div className="flex flex-col mt-24 space-y-5 items-center">
        <h1 className="font-title font-bold text-4xl">
          Ainda está com dúvida?
        </h1>
        <p className="font-text text-lg font-semibold">
          Mande uma mensagem para a nossa equipe!
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-5 py-3 text-black border-2 border-black bg-white transition-all hover:text-white hover:bg-black font-text font-semibold"
        >
          Contatar
        </button>
      </div>
    </div>
  );
}

export default FAQ;
