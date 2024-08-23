import "../App.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductList from "./ProductList";
import Features from "./Features";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
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

export default Home;
