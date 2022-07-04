import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  removeProduct,
  resetCart,
  updateCart,
} from "../../utils/cartUtils";

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    items: 0,
  },
  reducers: {
    addItem: (state, action) => addProduct(state, action),
    removeItem: (state, action) => removeProduct(state, action),
    reset: (state) => resetCart(state),
    cartUpdate: (state, action) => updateCart(state, action),
  },
});

export const { addItem, removeItem, reset, cartUpdate } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
