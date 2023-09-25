import React, { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../Context/CartContext';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addMealToCartHandler = (amount) => {
    cartCtx.addMeal(props.name, amount);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <MealItemForm id={props.id} addMealToCart={addMealToCartHandler} />
    </li>
  );
};
export default MealItem;
