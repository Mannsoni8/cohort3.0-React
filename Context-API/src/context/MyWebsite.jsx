import { createContext, useState } from "react";

const MyShop = createContext();

export const MyShopContextProvide = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyShop.Provider
      value={{ isCartOpen, cartItems, setCartItems, setIsCartOpen }}
    >
      {children}
    </MyShop.Provider>
  );
};
