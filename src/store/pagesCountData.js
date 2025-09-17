import { createSlice } from "@reduxjs/toolkit";

const pageCountData = createSlice({
  name: "productDataCount",
  initialState: {
    pages: 10,
    perPage: 10,
    page: 1,
  },
  reducers: {
    getDataCount: (state, action) => {
      return action.payload;
    },
    getPages: (state, action) => {
      return { ...state, pages: action.payload };
    },
    getPage: (state, action) => {
      return { ...state, page: action.payload };
    },
    getPerPage: (state, action) => {
      return { ...state, perPage: action.payload };
    },
  },
});

export default pageCountData.reducer;
export const { getDataCount, getPages, getPage, getPerPage } =
  pageCountData.actions;
