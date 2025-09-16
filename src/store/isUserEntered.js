import { createSlice } from "@reduxjs/toolkit";

const isUserEntered = createSlice({
  name: "isUserActivated",
  initialState: false,
  reducers: {
    getUserActivate: (state, action) => {
      return action.payload;
    },
  },
});

export default isUserEntered.reducer;
export const { getUserActivate } = isUserEntered.actions;
