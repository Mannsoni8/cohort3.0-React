import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard"; // Update the path if needed
import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";

const ShopePage = () => {
  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 1000,
  });

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {data.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default ShopePage;
