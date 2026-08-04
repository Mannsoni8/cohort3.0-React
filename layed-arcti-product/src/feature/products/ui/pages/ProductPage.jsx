import React from "react";
import {
  useAllProduct,
  useProductByCategory,
} from "../../hooks/useProductHook";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  let { data, isPending, error } = useAllProduct();
  let {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  if (isPending) return <h1>Loading products..</h1>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productByCategory?.products.length
          ? productByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
