import React from "react";

const ProductBox = () => {
  const products = Array(6).fill({
    name: "Product name",
    variant: "Variant",
    price: "$55",
  });

  return (
    <div className="container py-8">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="p-8">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <img src="/path/to/image" alt="Product" />
            </div>
            <div className="flex flex-row justify-between">
              <h2 className="font-title text-lg font-bold mt-4">
                {product.name}
              </h2>
              <p className="text-xl mt-4 font-text font-bold">
                {product.price}
              </p>
            </div>
            <p className="text-lg font-text">{product.variant}</p>
            <button className="mt-4 w-full bg-white text-black border border-black py-2">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBox;
