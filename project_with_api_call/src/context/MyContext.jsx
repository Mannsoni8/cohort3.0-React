import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const incrementQuntatity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementQuntatity = (id) => {
    setCartItems((prev) => {
      return prev
        .map((val) =>
          val.id === id ? { ...val, quantity: val.quantity - 1 } : val,
        )
        .filter((val) => val.quantity > 0);
    });
  };

  return (
    <MyStore.Provider
      value={{
        productData,
        setProductData,
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        incrementQuntatity,
        decrementQuntatity,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
