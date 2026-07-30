import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/NAvbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
