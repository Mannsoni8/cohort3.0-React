import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementByValue: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});
export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
