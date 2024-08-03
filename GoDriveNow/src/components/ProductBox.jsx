import React from "react";

const ProductBox = () => {
  const products = Array(6).fill({
    name: "Product name",
    variant: "Variant",
    price: "$55",
  });

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <img src="/path/to/image" alt="Product" />
            </div>
            <h2 className="font-title text-lg font-bold mt-4">
              {product.name}
            </h2>
            <p className="text-lg font-text">{product.variant}</p>
            <p className="text-xl mt-2 font-text font-bold">{product.price}</p>
            <button className="mt-4 w-full bg-black text-white py-2">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBox;
