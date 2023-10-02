import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },

    plus: (state, action) => {
      state.totalAmount++;
      const index = state.items.findIndex((item) => action.payload === item.id);
      state.items[index].quantity++;
      state.items[index].total += state.items[index].price;
    },

    minus: (state, action) => {
      state.totalAmount--;
      const index = state.items.findIndex((item) => action.payload === item.id);
      state.items[index].quantity--;
      state.items[index].total -= state.items[index].price;

      if (state.items[index].quantity === 0)
        state.items = state.items.filter((item, i) => i !== index);
    },
    add: (state, action) => {
      state.totalAmount++;
      const index = state.items.findIndex(
        (item) => action.payload.id === item.id
      );

      if (index !== -1) {
        state.items[index].quantity++;
        state.items[index].total += state.items[index].price;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
          total: action.payload.price,
          price: action.payload.price,
        });
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
