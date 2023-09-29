const redux = require('redux');

const defaultState = { count: 0 };
const reducer = (curState = defaultState, action) => {
  if (action.type === 'increment') {
    return {
      count: curState.count + 1,
    };
  }
  return curState;
};

const store = redux.createStore(reducer);

console.log(store.getState()); // { count: 0 }

const printSubscriber = () => {
  console.log(store.getState());
};
store.subscribe(printSubscriber);

store.dispatch({ type: 'increment' }); // { count: 1 }

console.log(store.getState()); // { count: 1 }
// 순서대로 출력
