import { useNavigate } from "react-router";

export const useAuth = () => {
  let navigate = useNavigate();

  return navigate;
};
