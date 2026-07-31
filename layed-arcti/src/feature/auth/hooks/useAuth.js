import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/api";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";
export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log("register", data);
  };

  const loginForm = async (data) => {
    try {
      let res = await loginUserApi(data);
      dispatch(addUser(res));
      toast.success("user logged in");
    } catch (error) {
      console.log("form api error", error);
    }
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    registerForm,
    loginForm,
  };
};
