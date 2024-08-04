import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <ProductList></ProductList>
      <Features></Features>
      <Testimonials></Testimonials>
    </>
  );
}

export default App;
