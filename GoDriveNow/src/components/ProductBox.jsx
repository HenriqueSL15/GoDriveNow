import React from "react";

import { useLocation } from "react-router-dom";

import car1Path from "../assets/cars/car1.png";
import car2Path from "../assets/cars/car2.png";
import car3Path from "../assets/cars/car3.png";
import car4Path from "../assets/cars/car4.png";
import car5Path from "../assets/cars/car5.png";
import car6Path from "../assets/cars/car6.png";

const ProductBox = () => {
  const location = useLocation();
  // let products = [];

  const smallProducts = [
    {
      name: "Carro 1",
      price: 57000,
      variant: "Vermelho",
      path: car1Path,
    },
    {
      name: "Carro 2",
      price: 95000,
      variant: "Branco",
      path: car2Path,
    },
    {
      name: "Carro 3",
      price: 46750,
      variant: "Branco",
      path: car3Path,
    },
    {
      name: "Carro 4",
      price: 36800,
      variant: "Dourado",
      path: car4Path,
    },
    {
      name: "Carro 5",
      price: 127300,
      variant: "Branco",
      path: car5Path,
    },
    {
      name: "Carro 6",
      price: 14000,
      variant: "Vermelho",
      path: car6Path,
    },
  ];

  const bigProducts = [
    {
      name: "Carro 1",
      price: 57000,
      variant: "Vermelho",
      path: car1Path,
    },
    {
      name: "Carro 2",
      price: 95000,
      variant: "Branco",
      path: car2Path,
    },
    {
      name: "Carro 3",
      price: 46750,
      variant: "Branco",
      path: car3Path,
    },
    {
      name: "Carro 4",
      price: 36800,
      variant: "Dourado",
      path: car4Path,
    },
    {
      name: "Carro 5",
      price: 127300,
      variant: "Branco",
      path: car5Path,
    },
    {
      name: "Carro 6",
      price: 14000,
      variant: "Vermelho",
      path: car6Path,
    },
    {
      name: "Carro 7",
      price: 57000,
      variant: "Vermelho",
      path: car1Path,
    },
    {
      name: "Carro 8",
      price: 95000,
      variant: "Branco",
      path: car2Path,
    },
    {
      name: "Carro 9",
      price: 46750,
      variant: "Branco",
      path: car3Path,
    },
    {
      name: "Carro 10",
      price: 36800,
      variant: "Dourado",
      path: car4Path,
    },
    {
      name: "Carro 11",
      price: 127300,
      variant: "Branco",
      path: car5Path,
    },
    {
      name: "Carro 12",
      price: 14000,
      variant: "Vermelho",
      path: car6Path,
    },
  ];

  return (
    <div className="container py-8">
      <div className="grid grid-cols-3 gap-6">
        {location.pathname === "/"
          ? smallProducts.map((product, index) => (
              <div key={index} className="p-8">
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <img src={product.path} alt="Product" className="w-max" />
                </div>
                <div className="flex flex-row justify-between">
                  <h2 className="font-title text-lg font-bold mt-4">
                    {product.name}
                  </h2>
                  <p className="text-xl mt-4 font-text font-bold">
                    R$ {product.price}
                  </p>
                </div>
                <p className="text-lg font-text">{product.variant}</p>
                <button className="mt-4 w-full text-black border-2 border-black bg-white transition-all hover:text-white  hover:bg-black py-2">
                  Alugar
                </button>
              </div>
            ))
          : bigProducts.map((product, index) => (
              <div key={index} className="p-8">
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <img src={product.path} alt="Product" className="w-max" />
                </div>
                <div className="flex flex-row justify-between">
                  <h2 className="font-title text-lg font-bold mt-4">
                    {product.name}
                  </h2>
                  <p className="text-xl mt-4 font-text font-bold">
                    R$ {product.price}
                  </p>
                </div>
                <p className="text-lg font-text">{product.variant}</p>
                <button className="mt-4 w-full text-black border-2 border-black bg-white transition-all hover:text-white  hover:bg-black py-2">
                  Alugar
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductBox;
