import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.png";
function Header({ scrollToSection }) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleScroll(section) {
    if (location.pathname !== "/") {
      navigate("/");
    }
    scrollToSection(section);
  }

  return (
    <div className="flex justify-between font-title font-medium mb-40">
      <img className="ml-11 mt-3 max-w-20" src={logo} alt="Logo" />
      <nav className="flex flex-row mt-7 gap-6">
        <button onClick={() => handleScroll("home")} className="px-2">
          Home
        </button>
        <button onClick={() => handleScroll("testimonials")} className="px-2">
          Depoimentos
        </button>
        <button onClick={() => handleScroll("features")} className="px-2">
          Vantagens
        </button>
        <button onClick={() => handleScroll("contact")} className="px-2">
          Contato
        </button>
        <button onClick={() => handleScroll("faq")} className="px-2">
          FAQ
        </button>
      </nav>
      <button
        onClick={() => handleScroll("products")}
        className="mr-11 mt-10 px-5 max-h-20 text-white border-2 border-transparent bg-black transition-all hover:text-black hover:bg-white hover:border-black"
      >
        Alugar
      </button>
    </div>
  );
}

export default Header;
