import { createSlice } from "@reduxjs/toolkit";

const inputValue = createSlice({
  name: "inputName",
  initialState: {
    input: "",
    currency: "",
  },
  reducers: {
    writeInput: (state, action) => {
      return { ...state, input: action.payload };
    },
    doCurrency: (state, action) => {
      return { ...state, currency: action.payload };
    },
  },
});

export const { writeInput, doCurrency } = inputValue.actions;
export default inputValue.reducer;
