import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/productslice";
export const store = configureStore({
  reducer: ProductSlice,
});
