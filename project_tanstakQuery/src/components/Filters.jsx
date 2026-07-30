import React from "react";

const Filters = () => {
  return (
    <div className="p-3 border border-2 border-gray-500">
      <div className="flex gap-8">
        <input
          type="text"
          className="p-2 outline-none"
          placeholder="Search products..."
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Filters;
