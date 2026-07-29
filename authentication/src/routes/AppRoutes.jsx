import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
const AppRoutes = () => {
  let router = createBrowserRouter([
    {},
    {
      path: "/",
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
