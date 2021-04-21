import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products-reducer";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
