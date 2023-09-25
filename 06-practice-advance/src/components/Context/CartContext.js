import React, { useReducer } from 'react';

import DUMMY_MEALS from '../Meals/dummy-meals';

const initCartContext = {
  meals: DUMMY_MEALS.map((meal) => ({
    id: meal.id,
    name: meal.name,
    price: meal.price,
    amount: 0,
  })),
  addMeal: (name, amount) => {},
  plusMeal: (name) => {},
  minusMeal: (name) => {},
  getTotalAmount: () => {},
  getTotalPrice: () => {},
};

const CartContext = React.createContext(initCartContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CART':
      const updatedMeals = state.meals.map((meal) => {
        if (meal.name === action.payloadName) {
          return { ...meal, amount: meal.amount + action.payloadAmount };
        } else {
          return { ...meal };
        }
      });
      return { meals: updatedMeals };
    default:
      return state;
  }
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initCartContext);

  const addMealToCartHandler = (name, amount) => {
    dispatchCart({
      type: 'UPDATE_CART',
      payloadName: name,
      payloadAmount: +amount,
    });
  };

  const plusMealToCartHandler = (name) => {
    dispatchCart({
      type: 'UPDATE_CART',
      payloadName: name,
      payloadAmount: +1,
    });
  };

  const minusMealToCartHandler = (name) => {
    dispatchCart({
      type: 'UPDATE_CART',
      payloadName: name,
      payloadAmount: -1,
    });
  };

  const getTotalAmount = () => {
    return cartState.meals.reduce((acc, meal) => {
      return acc + meal.amount;
    }, 0);
  };

  const getTotalPrice = () => {
    return cartState.meals.reduce((acc, meal) => {
      return acc + meal.price * meal.amount;
    }, 0);
  };

  const ret = {
    meals: cartState.meals,
    addMeal: addMealToCartHandler,
    plusMeal: plusMealToCartHandler,
    minusMeal: minusMealToCartHandler,
    getTotalAmount,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={ret}>{props.children}</CartContext.Provider>
  );
};

export { CartContextProvider };
export default CartContext;
