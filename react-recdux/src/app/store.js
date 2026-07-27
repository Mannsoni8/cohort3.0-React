import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/createSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
