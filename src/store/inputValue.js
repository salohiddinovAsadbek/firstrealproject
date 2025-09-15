import { createSlice } from "@reduxjs/toolkit";

const inputValue = createSlice({
  name: "inputName",
  initialState: "",
  reducers: {
    writeInput: (state, action) => {
      return action.payload;
    },
  },
});

export const { writeInput } = inputValue.actions;
export default inputValue.reducer;
