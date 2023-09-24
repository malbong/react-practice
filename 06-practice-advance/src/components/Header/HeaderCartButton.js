import React, { useState } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/CartIcon';
import Modal from '../UI/Modal';
import Cart from '../Cart/Cart';

const HeaderCartButton = () => {
  const [isActive, setIsActive] = useState(false);

  const openCartModalHandler = () => {
    setIsActive(true);
  };

  const closeCartModalHandler = () => {
    setIsActive(false);
  };

  return (
    <React.Fragment>
      {isActive && (
        <Modal onCloseModal={closeCartModalHandler}>
          <Cart onCloseModal={closeCartModalHandler} />
        </Modal>
      )}
      <button className={classes.button} onClick={openCartModalHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        Your Cart
        <span className={classes.badge}>0</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
