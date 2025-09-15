import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    getProducts: (state, action) => {
      console.log(action.payload);

      return action.payload;
    },
  },
});

export const { getProducts } = products.actions;
export default products.reducer;
