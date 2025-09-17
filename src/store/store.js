import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import filterAll from "./filter";
import writeInput from "./inputValue";
import addToTheBasket from "./basket";
import activeSections from "./activeSections";
import addAnimation from "./isWaiting";
import isUserEntered from "./isUserEntered";
import getDataCount from "./pagesCountData";
import getUserData from "./userData";

export const store = configureStore({
  reducer: {
    productsData: products,
    filteredData: filterAll,
    inputData: writeInput,
    basketData: addToTheBasket,
    activeData: activeSections,
    animationData: addAnimation,
    userData: isUserEntered,
    pageData: getDataCount,
    userDataAll: getUserData,
  },
});
