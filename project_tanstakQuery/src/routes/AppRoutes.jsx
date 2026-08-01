import React, { useEffect } from "react";
import { addUser } from "../features/authSilce";
import { createBrowserRouter, RouterProvider } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { lazy } from "react";

const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const MainLayout = lazy(() => import("../layout/MainLayout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const PublicProtected = lazy(() => import("./protected/PublicProtected"));
const MainProtected = lazy(() => import("./protected/MainProtected"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ShopePage = lazy(() => import("../pages/ShopePage"));

const AppRoutes = () => {
  let dispatch = useDispatch();

  const hydrateUser = () => {
    console.log("hydration processed...");
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("UnAuthorized user");
      return;
    }

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

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
              path: "",
              element: <LoginPage />,
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
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "shope",
              element: <ShopePage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
