import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../app/layout/AuthLayout";
import PublicProtected from "./protected/PublicProtected";
import LoginPages from "../feature/auth/ui/pages/LoginPages";
import RegisterPage from "../feature/auth/ui/pages/RegisterPage";
const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <LoginPages />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
        
    }
  ]);
  return <RouterProvider />;
};

export default AppRoutes;
