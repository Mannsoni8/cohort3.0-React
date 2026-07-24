import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [scrollY, setScrollY] = useState(0);

  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
  };

  let filteredData = () => {
    let result = productData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductData(result);
  };

  useEffect(() => {
    if (!searchData) return;

    let timeout = setTimeout(() => {
      filteredData();
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchData]);
  let throttle = false;
  useEffect(() => {
    let handelScroll = () => {
      if (throttle) return;
      throttle = true;
      console.log("scroll triggered..");
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 1000);
    };

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Debouncing</h1>
      <input
        type="text"
        value={searchData}
        placeholder="Search Products..."
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      {productData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
