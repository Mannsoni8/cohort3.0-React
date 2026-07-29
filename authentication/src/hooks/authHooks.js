import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSilce";

export const useAuth = () => {
  const navigate = useNavigate();

  const [registeredUSers, setRegisteredUSers] = useState([]);

  let dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let arr = [...registeredUSers, data];
    setRegisteredUSers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
  };

  const loginForm = (data) => {
    let user = registeredUSers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      alert("invalid user");
    }
    dispatch(addUser(user));
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
