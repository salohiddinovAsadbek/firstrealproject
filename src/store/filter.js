import { createSlice } from "@reduxjs/toolkit";

const filterAll = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFilter } = filterAll.actions;
export default filterAll.reducer;
