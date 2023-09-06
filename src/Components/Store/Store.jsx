import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../Redux/CartSlice";
import authReducer from "../Redux/authSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authReducer,
  },
});

export default store;
