import React from "react";

const Home = ({ users }) => {
  console.log("Home rendering");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default React.memo(Home, (prevProp, nextProp) => {
  return prevProp.users.id === nextProp.users.id;
});
