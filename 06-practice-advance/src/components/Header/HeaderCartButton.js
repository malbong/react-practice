import React, { useState, useContext, useEffect } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/CartIcon';
import Modal from '../UI/Modal';
import Cart from '../Cart/Cart';
import CartContext from '../Context/CartContext';

const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);

  const [isActive, setIsActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => {
      setIsAnimating(false);
    };
  }, [cartCtx.meals]);

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
      <button
        className={`${classes.button} ${isAnimating && classes.bump}`}
        onClick={openCartModalHandler}
      >
        <span className={classes.icon}>
          <CartIcon />
        </span>
        Your Cart
        <span className={classes.badge}>{cartCtx.getTotalAmount()}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
