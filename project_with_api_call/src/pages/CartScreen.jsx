import React, { useContext } from "react";
import CartProductCard from "../components/CartProductCard";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  let { cartItems } = useContext(MyStore);
  return (
    <div className="h-[95%] text-xl grid grid-cols-3 gap-4">
      {cartItems.map((elem) => {
        return <CartProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
