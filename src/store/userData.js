import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
  name: "userData",
  initialState: [],
  reducers: {
    getUserData: (state, action) => {
      return action.payload;
    },
  },
});

export default userData.reducer;
export const { getUserData } = userData.actions;
