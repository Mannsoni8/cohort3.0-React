import React from "react";
import { NavLink } from "react-router";
import { ShoppingCart, Box } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  `transition-colors duration-200 ${
    isActive ? "text-red-500 font-semibold" : "text-gray-700 hover:text-red-500"
  }`;

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-md">
      {/* Logo */}
      <NavLink
        to="/main"
        className="text-2xl font-bold text-red-500 tracking-wide"
      >
        Logo
      </NavLink>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <NavLink to="/main" className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/main/product" className={navLinkClass}>
          Product
        </NavLink>

        <NavLink to="/main/about" className={navLinkClass}>
          About
        </NavLink>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-5">
        <NavLink
          to={"/main/cart"}
          className="text-gray-700 hover:text-red-500 transition-colors"
        >
          <ShoppingCart size={22} />
        </NavLink>

        <NavLink
          to={"/main/orders"}
          className="text-gray-700 hover:text-red-500 transition-colors"
        >
          <Box size={22} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
