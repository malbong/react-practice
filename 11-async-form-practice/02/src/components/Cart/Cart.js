import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import useHttp from '../Hooks/use-http';

const Cart = (props) => {
  const {
    isLoading: orderIsLoading,
    error: orderError,
    request: orderRequest,
  } = useHttp();

  const [showCheckout, setShowCheckout] = useState(false);
  const [finishedOrder, setFinishedOrder] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderOpenHandler = () => {
    setShowCheckout(true);
  };

  const orderCloseHandler = () => {
    setShowCheckout(false);
  };

  const orderSubmitHandler = async (orderInfo) => {
    const url =
      'https://react-post-35b9b-default-rtdb.firebaseio.com/orders.json';
    const options = {
      method: 'POST',
      body: JSON.stringify({
        info: {
          name: orderInfo.name,
          street: orderInfo.street,
          postalCode: orderInfo.postalCode,
          city: orderInfo.city,
        },
        items: cartCtx.items.map((item) => ({ ...item })),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await orderRequest(url, options);

    cartCtx.clearItems();
    setFinishedOrder(true);
  };

  const cartItems = (
    <React.Fragment>
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, { ...item, amount: 1 })}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
    </React.Fragment>
  );

  const actions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderOpenHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  let content = (
    <React.Fragment>
      {cartItems}
      {showCheckout && (
        <Checkout onCancel={orderCloseHandler} onSubmit={orderSubmitHandler} />
      )}
      {!showCheckout && actions}
    </React.Fragment>
  );

  if (orderIsLoading) content = <h1>...Requesting Order...</h1>;
  if (orderError) content = <h1>...Requesting Error...</h1>;
  if (finishedOrder) content = <h1>Thank you for the order!</h1>;

  return <Modal onClose={props.onClose}>{content}</Modal>;
};

export default Cart;
