import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App is rendering");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "John", id: 741 });

  return (
    <div>
      <h1>App</h1>

      <h2>Count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Inc</button>

      <h2>Name: {users.name}</h2>
      <button onClick={() => setUsers({ ...users, name: "Alice" })}>
        Change Name
      </button>

      <Home users={users} />
      <About />
    </div>
  );
};

export default App;
