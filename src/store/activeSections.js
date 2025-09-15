import { createSlice } from "@reduxjs/toolkit";

const activeSection = createSlice({
  name: "activeSection",
  initialState: {},
  reducers: {
    getActiveSection: (state, action) => {
      return action.payload;
    },
  },
});

export default activeSection.reducer;
export const { getActiveSection } = activeSection.actions;
