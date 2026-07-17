import React, { useEffect } from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  let { productData, setProductData } = useContext(MyStore);

  let getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="p-2 grid grid-col-4 gap-4">
      {productData.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default Home;
