import { createSlice } from "@reduxjs/toolkit";
import { FastForward } from "lucide-react";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser: (state) => {
      ((state.user = null), (state.isAuthenticated = false));
    },
  },
});

export const { addUser, reducers } = authSlice.actions;
export default authSlice.reducer;
