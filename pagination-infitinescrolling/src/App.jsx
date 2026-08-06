import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);

  const getAllProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}&skip=`,
      );
      setProducts(response.data);
    } catch (error) {
      console.log("Error in API:", error);
    }
  };

  return (
    <div>
      <h1>Products ({limit})</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <img src={product.image} alt={product.title} width="100" />
        </div>
      ))}
      <div>
        <button
          disabled={limit === 0}
          onClick={() => {
            if (limit > 1) {
              setLimit(limit - 1);
            }
          }}
        >
          Prev
        </button>
        <p>Value</p>
        <button
          disabled={limit === 10}
          onClick={() => {
            setLimit(limit + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
