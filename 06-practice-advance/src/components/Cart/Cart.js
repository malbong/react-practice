import React from 'react';

import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const orderHandler = () => {
    console.log('Ordering...');
  };

  return (
    <ul className={classes['cart-items']}>
      {/* cartItems */}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${12.3}</span>
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
