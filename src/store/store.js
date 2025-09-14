import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import filterAll from "./filter";
import writeInput from "./inputValue";

export const store = configureStore({
  reducer: {
    productsData: products,
    filteredData: filterAll,
    inputData: writeInput,
  },
});
