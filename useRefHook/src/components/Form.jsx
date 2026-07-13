import React, { useRef, useState } from "react";

const Form = () => {
  const [producut, setProducut] = useState();
  const formRef = useRef({});

  const formHandeling = (e) => {
    e.preventDefault();

    let obj = {
      pNmae: formRef.current.productName.value,
      price: formRef.current.price.value,
      catagory: formRef.current.catagory.value,
      image: formRef.current.image.value,
    };
    setProducut(obj);
  };
  return (
    <div className="w-80 h-sreen bg-white">
      <form
        onSubmit={formHandeling}
        className="flex flex-col p-6 rounded gap-4"
      >
        <input
          ref={(e) => (formRef.current.productName = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          ref={(e) => (formRef.current.price = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span ref={(e) => (formRef.current.catagory = e)}>Select Catagory</span>
        <select name="" id="">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
          ref={(e) => (formRef.current.image = e)}
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

export default Form;
