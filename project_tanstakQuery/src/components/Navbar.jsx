import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <h1>skymart</h1>
      <div>
        <NavLink to={"/main"}>Home</NavLink>
        <NavLink to={"/main/shpoe"}>Shope</NavLink>
        <NavLink to={"/main/about"}>About</NavLink>
      </div>
      <div>
        <h2>HEt,Mann</h2>
        <button>Cart</button>
        <LogOut className="cursor-pointer" size={18} />
      </div>
    </div>
  );
};

export default Navbar;
