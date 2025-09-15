import { createSlice } from "@reduxjs/toolkit";

const basketData = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToTheBasket: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToTheBasket } = basketData.actions;
export default basketData.reducer;
