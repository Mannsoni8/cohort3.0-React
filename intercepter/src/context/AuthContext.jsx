import { useState } from "react";
import { createContext } from "react";

export const Auth = createContext();
export const AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedinUser")),
  );
  return (
    <Auth.Provider
      value={{ registerUsers, setRegisterUsers, loggedInUser, setLoggedInUser }}
    >
      {children}
    </Auth.Provider>
  );
};
