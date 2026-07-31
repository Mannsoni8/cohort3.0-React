import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../feature/auth/state/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});
