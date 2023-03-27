import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, actions) => {
      const item = state.items.find((el) => el.id === actions.payload.id);
      if (!item) {
        state.items.push({
          id: actions.payload.id,
          title: actions.payload.title,
          price: actions.payload.price,
          quantity: Number(actions.payload.count),
          totalPrice: actions.payload.price * actions.payload.count,
        });
      } else {
        item.quantity += Number(actions.payload.count);
        item.totalPrice = item.price * item.quantity;
      }
      state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);

    },
    removeFromCart: (state, actions) => {
      const itemIndex = state.items.findIndex((el) => el.id === actions.payload);
      const item = state.items[itemIndex];
      if (item) {
        state.items = state.items.filter((el) => el.id !== actions.payload);
        state.totalPrice -= item.totalPrice;
        state.totalQuantity -= item.quantity;
      }      
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
