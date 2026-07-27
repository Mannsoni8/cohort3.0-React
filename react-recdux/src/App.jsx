import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/createSlice";
const App = () => {
  let dispatch = useDispatch();
  let { value } = useSelector((store) => store.counter);
  return (
    <div>
      <h1>My count - {value}</h1>
      <button onClick={() => dispatch(decrement())}>Dec</button>
      <button onClick={() => dispatch(increment())}>Inc</button>
    </div>
  );
};

export default App;
