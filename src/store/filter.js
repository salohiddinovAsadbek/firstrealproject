import { createSlice } from "@reduxjs/toolkit";

const filterAll = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      const exists = state?.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      } else {
        console.log("Product already in cart");
      }
    },
  },
});

export const { addFilter } = filterAll.actions;
export default filterAll.reducer;
