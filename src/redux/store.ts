import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    cart: cartReducer
  },
  devTools: import.meta.env.DEV
}); 

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
