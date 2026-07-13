import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  let {
    register,
    handelSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-80 h-sreen bg-white">
      <form
        onSubmit={handelSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col p-6 rounded gap-4"
      >
        <input
          {...register("productName")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          {...register("price")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span {...register("catagory")}>Select Catagory</span>
        <select name="" id="">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="Image"
        />
        <button
          className="p-2 bg-blue text-white rounded uppercase"
          create
        ></button>
      </form>
    </div>
  );
};

export default RHF;
