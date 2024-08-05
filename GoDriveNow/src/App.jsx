import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log("ID:", id); // Verifica o ID que está sendo passado
    console.log("Elemento:", element); // Verifica se o elemento está sendo encontrado
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} id="home" />
      <ProductList id="products" />
      <Features id="features" />
      <Testimonials id="testimonials" />
      <FAQ scrollToSection={scrollToSection} id="faq" />
      <Contact id="contact" />
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}

export default App;
