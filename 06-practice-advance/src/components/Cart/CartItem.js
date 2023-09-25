import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const minusHandler = () => {
    props.onMinus(props.name);
  };
  const plusHandler = () => {
    props.onPlus(props.name);
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={minusHandler}>−</button>
        <button onClick={plusHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
