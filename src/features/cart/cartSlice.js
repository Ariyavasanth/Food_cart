import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 1,
      name: "Margherita Delight",
      amt: "199",
      shope: "Pizza Hunt",
      pic: "/images/pizza.jpg",
      latest: "No",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, actions) => {
      state.cart.push(actions.payload);
    },

    removeCart: (state, actions) => {
      state.cart = state.cart.filter((d) => d.id !== actions.payload);
    },
  },
});

export default cartSlice.reducer;

export const { addCart, removeCart } = cartSlice.actions;
