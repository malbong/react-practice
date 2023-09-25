import React, { useContext } from 'react';

import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../Context/CartContext';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const orderHandler = () => {
    console.log('Ordering...');
  };

  return (
    <ul className={classes['cart-items']}>
      {cartCtx.meals
        .filter((meal) => meal.amount > 0)
        .map((meal) => {
          return (
            <CartItem
              key={meal.id}
              name={meal.name}
              price={meal.price}
              amount={meal.amount}
              onMinus={cartCtx.minusMeal}
              onPlus={cartCtx.plusMeal}
            />
          );
        })}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.getTotalPrice().toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseModal}>
          Close
        </button>
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      </div>
    </ul>
  );
};

export default Cart;
