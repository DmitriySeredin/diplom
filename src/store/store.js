import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-reducer";
import productsReducer from "./reducers/products-reducer";

export default configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});
