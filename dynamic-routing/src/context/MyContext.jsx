import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  return (
    <MyStore.Provider value={{ productData, setProductData }}>
      {children}
    </MyStore.Provider>
  );
};
