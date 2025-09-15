import { createSlice } from "@reduxjs/toolkit";

const isLoading = createSlice({
  name: "animation",
  initialState: true,
  reducers: {
    addAnimation: (state, action) => {
      return action.payload;
    },
  },
});

export default isLoading.reducer;
export const { addAnimation } = isLoading.actions;
