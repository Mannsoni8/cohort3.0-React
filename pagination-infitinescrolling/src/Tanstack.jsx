import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllProduct } from "./api/productApi";

const Tanstack = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, error, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProduct(page),
    placeholderData: keepPreviousData,
  });

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl text-red-500">{error.message}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">
          🛍 Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.products?.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-52 object-contain p-4 bg-gray-50"
              />

              <div className="p-4">
                <h2 className="font-semibold text-lg line-clamp-1">
                  {product.title}
                </h2>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-green-600">
                    ${product.price}
                  </span>

                  <span className="text-yellow-500">⭐ {product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
          >
            ← Previous
          </button>

          <span className="text-lg font-semibold bg-white px-4 py-2 rounded-lg shadow">
            Page {page}
          </span>

          <button
            onClick={() => {
              if (!isPlaceholderData) {
                setPage((prev) => prev + 1);
              }
            }}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tanstack;
