import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="border-r border-gray-500 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">E-comm</h1>
      <div className="flex flex-col gap-4 ml-5">
        <NavLink
          className={(isActive) =>
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/main"}
        >
          Home
        </NavLink>
        <NavLink
          className={(isActive) =>
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
        ></NavLink>
        <NavLink
          className={(isActive) =>
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
        ></NavLink>
        <NavLink></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
