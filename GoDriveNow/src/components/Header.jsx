function Header() {
  return (
    <>
      <div className="flex justify-between font-title font-medium">
        <img className="ml-11 mt-3" src="" alt="Logo" />
        <ul className="flex flex-row mt-7 gap-6">
          <li className="px-2">Home</li>
          <li className="px-2">Depoimentos</li>
          <li className="px-2">Vantagens</li>
          <li className="px-2">Sobre Nós</li>
          <li className="px-2">Contato</li>
          <li className="px-2">FAQ</li>
        </ul>
        <button className="mr-11 mt-3 px-5 text-white bg-black">Alugar</button>
      </div>
    </>
  );
}

export default Header;
