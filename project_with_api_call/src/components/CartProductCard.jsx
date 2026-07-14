import React, { useContext } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { MyStore } from "../context/MyContext";

const CartProductCard = ({ product }) => {
  let { incrementQuntatity, decrementQuntatity } = useContext(MyStore);
  return (
    <div className="flex items-center gap-5 p-4 bg-white rounded-xl shadow-md">
      {/* Product Image */}
      <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 capitalize mt-1">
          {product.category}
        </p>

        <p className="text-xl font-bold text-green-600 mt-2">
          ${product.price}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <button
            onClick={() => decrementQuntatity(product.id)}
            className="p-2 hover:bg-gray-100"
          >
            <Minus size={18} />
          </button>

          <span className="px-4 font-semibold">{product.quantity}</span>

          <button
            onClick={() => incrementQuntatity(product.id)}
            className="p-2 hover:bg-gray-100"
          >
            <Plus size={18} />
          </button>
        </div>

        <button className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm">
          <Trash2 size={16} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
