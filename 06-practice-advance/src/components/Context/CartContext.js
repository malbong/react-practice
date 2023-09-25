import React, { useReducer } from 'react';
import DUMMY_MEALS from '../Meals/dummy-meals';

const initCartContext = {
  meals: DUMMY_MEALS.map((meal, index) => ({
    id: Math.random(),
    name: meal.name,
    price: meal.price,
    amount: 0,
  })),
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'CALC_MEAL':
      const newMeals = state.meals.map((meal) => {
        if (meal.name === action.payloadName) {
          return { ...meal, amount: meal.amount + action.payloadAmount };
        } else {
          return { ...meal };
        }
      });
      return { meals: newMeals };
    default:
      return state;
  }
};

const CartContext = React.createContext(initCartContext);

const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initCartContext);

  const addMeal = (name, amount) => {
    dispatchCart({
      type: 'CALC_MEAL',
      payloadName: name,
      payloadAmount: +amount,
    });
  };

  const plusMeal = (name) => {
    dispatchCart({
      type: 'CALC_MEAL',
      payloadName: name,
      payloadAmount: +1,
    });
  };

  const minusMeal = (name) => {
    dispatchCart({
      type: 'CALC_MEAL',
      payloadName: name,
      payloadAmount: -1,
    });
  };

  const getTotalAmount = () => {
    let ret = 0;
    cartState.meals.forEach((meal) => {
      ret += meal.amount;
    });
    return ret;
  };

  const getTotalPrice = () => {
    let ret = 0;
    cartState.meals.forEach((meal) => {
      ret += meal.price * meal.amount;
    });
    return ret;
  };

  const ret = {
    meals: cartState.meals,
    addMeal,
    plusMeal,
    minusMeal,
    getTotalAmount,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={ret}>{props.children}</CartContext.Provider>
  );
};

export { CartContextProvider };
export default CartContext;
