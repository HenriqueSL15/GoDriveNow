function Header({ scrollToSection }) {
  return (
    <div className="flex justify-between font-title font-medium mb-40">
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
  );
}

export default Header;
