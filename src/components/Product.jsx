import React from "react";

// Product component to show a single product card
const Product = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
      {/* Product image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />

      {/* Product title */}
      
      <h3 className="text-lg font-semibold mt-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Category */}
      <p className="text-sm text-gray-600">{product.category}</p>

      {/* Price */}
      <p className="font-bold mt-1">${product.price}</p>

      {/* Add to Cart button */}
      <button
        onClick={() => onAddToCart(product)}  // Call parent function on click
        className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
