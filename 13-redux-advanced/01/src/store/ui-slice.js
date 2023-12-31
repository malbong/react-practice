import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'cart',
  initialState: {
    cartIsVisible: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      if (action.payload === null) {
        state.notification = null;
      } else {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      }
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
