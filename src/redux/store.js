import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./category";
import { productsSlice } from "./products";

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    produtcts: productsSlice.reducer,
  },
});
