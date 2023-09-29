import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true,
};

const reducer = (curState = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...curState,
        counter: curState.counter + 1,
      };
    case 'decrement':
      return {
        ...curState,
        counter: curState.counter - 1,
      };
    case 'increase':
      return {
        ...curState,
        counter: curState.counter + action.payload,
      };
    case 'toggle':
      return {
        ...curState,
        showCounter: !curState.showCounter,
      };
    default:
      return curState;
  }
};
const store = createStore(reducer);

export default store;
