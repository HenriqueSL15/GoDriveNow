import ProductBox from "./ProductBox";
function ProductList() {
  return (
    <>
      <div className="flex justify-between mb-20">
        <div className="flex flex-col">
          <h1 className="ml-20 text-5xl font-bold font-title mb-3">
            Nossos Carros
          </h1>
          <p className="text-xl ml-20 font-text">
            Aqui estão todos os carros que estão disponíveis para aluguel.
          </p>
        </div>
        <button className="mr-11 mt-3 px-5 py-3 text-white bg-black">
          Ver Todos
        </button>
      </div>
      <div className="ml-20">
        <ProductBox></ProductBox>
      </div>
    </>
  );
}

export default ProductList;
