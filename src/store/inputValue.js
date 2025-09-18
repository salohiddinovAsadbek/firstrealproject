import { createSlice } from "@reduxjs/toolkit";

const inputValue = createSlice({
  name: "inputName",
  initialState: {
    input: "",
    currency: "",
    sort: "",
  },
  reducers: {
    writeInput: (state, action) => {
      return { ...state, input: action.payload };
    },
    doCurrency: (state, action) => {
      return { ...state, currency: action.payload };
    },
    doSort: (state, action) => {
      return { ...state, sort: action.payload };
    },
  },
});

export const { writeInput, doCurrency, doSort } = inputValue.actions;
export default inputValue.reducer;
