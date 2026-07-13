import React, { useState } from "react";

const Web = () => {
  const [formData, setFormData] = useState({});

  const handelChange = (e) => {
    let [name, value] = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col gap-5 w-60">
      <input
        type="text"
        name="name"
        onChange={handelChange}
        className="border-2"
        placeholder="name"
      />

      <input
        type="email"
        name="email"
        onChange={handelChange}
        className="border-2"
        placeholder="Email"
      />

      <input
        type="password"
        name="password"
        onChange={handelChange}
        className="border-2"
        placeholder="Password"
      />

      <h1>This is name - {FormData.name}</h1>
      <h1>This is email - {FormData.email}</h1>
      <h1>This is password - {FormData.password}</h1>
    </div>
  );
};

export default Web;
q;
