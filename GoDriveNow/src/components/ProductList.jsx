import ProductBox from "./ProductBox";
function ProductList() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <h1 className="ml-36 text-5xl font-bold font-title mb-3">
            Nossos Carros
          </h1>
          <p className="text-xl ml-36 font-text">
            Aqui estão todos os carros que estão disponíveis para aluguel.
          </p>
        </div>
        <button className="mr-36 mt-3 px-5 py-3 text-white bg-black">
          Ver Todos
        </button>
      </div>
      <div className="flex justify-around">
        <ProductBox></ProductBox>
      </div>
    </>
  );
}

export default ProductList;
