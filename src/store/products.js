import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    getProducts: (state, action) => {
      return action.payload.data;
    },
  },
});

export const { getProducts } = products.actions;
export default products.reducer;
