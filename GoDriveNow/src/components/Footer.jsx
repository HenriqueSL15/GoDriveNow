function Footer({ scrollToSection }) {
  return (
    <div className="flex flex-col gap-6 mt-20">
      <div className="flex justify-between pb-10 border-b-2 border-black/20">
        <img className="ml-11 mt-3" src="" alt="Logo" />
        <nav className="flex flex-row mt-7 gap-6">
          <button onClick={() => scrollToSection("home")} className="px-2">
            Home
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="px-2"
          >
            Depoimentos
          </button>
          <button onClick={() => scrollToSection("features")} className="px-2">
            Vantagens
          </button>
          {/* <button onClick={() => scrollToSection("about")} className="px-2">
          Sobre Nós
        </button> */}
          <button onClick={() => scrollToSection("contact")} className="px-2">
            Contato
          </button>
          <button onClick={() => scrollToSection("faq")} className="px-2">
            FAQ
          </button>
        </nav>
        <button
          onClick={() => scrollToSection("products")}
          className="mr-11 mt-3 px-5 text-white border-2 border-transparent bg-black transition-all hover:text-black  hover:bg-white hover:border-black"
        >
          Alugar
        </button>
      </div>
      <div className="flex gap-6 mb-16 justify-center">
        <h2>© 2024 Go Drive Now. All rights reserved.</h2>
        <h2>Política de Privacidade</h2>
        <h2>Termos de Serviço</h2>
        <h2>Configurações de Cookies</h2>
      </div>
    </div>
  );
}

export default Footer;
