import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { Trash2, Plus, Minus } from "lucide-react";

const ProductCard = ({ product, isInCart }) => {
  let { setCartItems, incrementQuntatity, decrementQuntatity } =
    useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full capitalize">
          {product.category}
        </span>

        <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <div className="flex items-center mt-3 text-sm">
          <span className="text-yellow-500">⭐ {product.rating.rate}</span>
          <span className="ml-2 text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mt-5">
          <p className="text-2xl font-bold text-green-600">${product.price}</p>

          {!isInCart ? (
            <button
              onClick={addToCart}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                Go to Cart
              </button>
              <button
                onClick={() => decrementQuntatity(product.id)}
                className="p-2 hover:bg-gray-100"
              >
                <Minus size={18} />
              </button>

              <span className="px-4 font-semibold text-amber-200">
                {isInCart.quantity}
              </span>

              <button
                onClick={() => incrementQuntatity(product.id)}
                className="p-2 hover:bg-gray-100"
              >
                <Plus size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
