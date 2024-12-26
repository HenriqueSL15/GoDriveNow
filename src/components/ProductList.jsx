import ProductBox from "./ProductBox";
import { Link, useLocation } from "react-router-dom";

function ProductList({ id }) {
  const location = useLocation();
  return (
    <>
      <div id={id} className="flex justify-between mb-4">
        <div className="flex flex-col">
          <h1 className="ml-36 text-5xl font-bold font-title mb-3">
            Nossos Carros
          </h1>
          <p className="text-xl ml-36 font-text">
            Aqui estão todos os carros que estão disponíveis para aluguel.
          </p>
        </div>
        {location.pathname !== "/products" ? (
          <Link to="/products">
            <button className="mr-36 mt-3 h-14 w-32 text-white border-2 border-transparent bg-black transition-all hover:text-black  hover:bg-white hover:border-black">
              Ver Todos
            </button>
          </Link>
        ) : null}
      </div>
      <div className="flex justify-around">
        <ProductBox></ProductBox>
      </div>
    </>
  );
}

export default ProductList;
