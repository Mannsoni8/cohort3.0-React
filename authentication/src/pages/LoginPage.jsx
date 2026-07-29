import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../features/counterSlice";

const LoginPage = () => {
  let { count } = useSelector((store) => store.counter);
  let dispatch = useDispatch();
  const [inpValue, setInpValue] = useState(0);
  return (
    <div>
      <h1>count is - {count}</h1>
      <button onClick={() => dispatch(decrement())}>Dec</button>
      <button onClick={() => dispatch(increment())}>Inc</button> <br /> <br />
      <input
        type="text"
        placeholder="Enter Count"
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByValue(inpValue))}></button>
    </div>
  );
};

export default LoginPage;
