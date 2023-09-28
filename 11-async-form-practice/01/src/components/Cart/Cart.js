import { Fragment, useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import useHttp from '../Hooks/use-http';

const url = 'https://react-post-35b9b-default-rtdb.firebaseio.com/orders.json';

const Cart = (props) => {
  const [acceptOrder, setAcceptOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const cartCtx = useContext(CartContext);

  const { isLoading, error, request } = useHttp();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const acceptOrderHandler = () => {
    setAcceptOrder(true);
  };

  const cancelOrderHandler = () => {
    setAcceptOrder(false);
  };

  const send = async (userInfo) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        ...userInfo,
        items: cartCtx.items.map((item) => ({ ...item })),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const data = await request(url, options);
    if (!data) return;

    setOrderSuccess(true);
    cartCtx.clearItem();
  };

  const requestSendHandler = (userInfo) => {
    send(userInfo);
  };

  const itemList = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, { ...item, amount: 1 })}
    />
  ));

  let content = <h1>Empty Cart</h1>;

  if (hasItems) {
    content = (
      <Fragment>
        <ul className={classes['cart-items']}>{itemList}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
      </Fragment>
    );
  }

  let checkout = (
    <Checkout onCancel={cancelOrderHandler} requestSend={requestSendHandler} />
  );
  if (isLoading) {
    checkout = <h1>current Loading...</h1>;
  }
  if (error) {
    checkout = (
      <Fragment>
        <h1>{error}</h1>
        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </Fragment>
    );
  }
  if (orderSuccess) {
    checkout = (
      <Fragment>
        <h1>Successfully sent the order!</h1>
        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </Fragment>
    );
  }

  return (
    <Modal onClose={props.onClose}>
      {content}
      {acceptOrder && checkout}
      {!acceptOrder && (
        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button type="button" onClick={acceptOrderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
