import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "./api/productApi";

const Infinite = () => {
  let limit = 10;
  const {
    data,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts(limit, pageParam),

    initialPageParam: 0,

    getNextPageParam: (lastPage, allPage) => {
      return lastPage.nextSkip;
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Infinite Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.pages.map((page) =>
          page.products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-full object-contain"
              />

              <h2 className="font-semibold mt-3">{product.title}</h2>

              <p className="text-green-600 font-bold mt-2">${product.price}</p>
            </div>
          )),
        )}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
        >
          {isFetchingNextPage
            ? "Loading..."
            : hasNextPage
              ? "Load More"
              : "No More Products"}
        </button>
      </div>
    </div>
  );
};

export default Infinite;
