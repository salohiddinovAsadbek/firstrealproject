import { createSlice } from "@reduxjs/toolkit";

const activeSection = createSlice({
  name: "activeSection",
  initialState: {},
  reducers: {
    getActiveSection: (state, action) => {
      return action.payload;
    },
    getActiveBar: (state, action) => {
      console.log(action.payload);

      return action.payload;
    },
  },
});

export default activeSection.reducer;
export const { getActiveSection } = activeSection.actions;
