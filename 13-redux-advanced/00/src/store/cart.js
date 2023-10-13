import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  show: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },

    addItem: (state, action) => {
      state.totalAmount++;

      for (let i = 0; i < state.items.length; ++i) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].quantity++;
          return;
        }
      }

      state.items.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        quantity: 1,
      });
    },

    removeItem: (state, action) => {
      state.totalAmount--;
      for (let i = 0; i < state.items.length; ++i) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].quantity--;
        }
      }
      state.items = state.items.filter((item) => item.quantity !== 0);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
