import carHeroSection from "../assets/carHeroSection.png";

function HeroSection() {
  return (
    <>
      <div className="flex flex-row my-60 justify-between">
        <div className="ml-20 mt-20">
          <h1>Encontre o Carro Perfeito para Suas Viagens</h1>
          <p>
            Com a CarRental, você aluga com facilidade e rapidez. Reserve o seu
            carro online agora mesmo!
          </p>
          <button className="mr-11 mt-3 px-5 text-white bg-black">
            Reserve Agora
          </button>
        </div>
        <img className="w-2/5 mr-20" src={carHeroSection} alt="IMAGEM" />
      </div>
    </>
  );
}

export default HeroSection;
