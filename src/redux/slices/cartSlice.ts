import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface CartItemInterface {
  id: string;
  name: string;
  price: number;
  quantity: number;
  pricePerQuantity: number
}

const initialState: CartItemInterface[] =[];

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItems: (state, action) => {
            state.push(action.payload);
        },

        removeItem: (state, action) => {
            return state.filter(item=> item.id != action.payload)
        }
    }
})

export const getTotalPrice = (state: RootState) => state.cart.reduce((total: number, item: CartItemInterface) => total + item.price, 0)
export const {addItems, removeItem} = cartSlice.actions;
export default cartSlice.reducer;