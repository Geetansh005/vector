import { createSlice } from "@reduxjs/toolkit";

const cart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  cart: cart || []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeitem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((i) => i.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; 
        } else {
          state.cart = state.cart.filter((u) => u.id !== id);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }
});

export const { addTocart, removeitem } = cartSlice.actions;
export default cartSlice.reducer;
