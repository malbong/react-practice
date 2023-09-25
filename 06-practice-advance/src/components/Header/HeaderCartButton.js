import React, { useState, useContext, useEffect } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../Context/CartContext';

let identifier = null;

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [isAnimating, setIsAnimating] = useState(false);

  const btnClasses = `${classes.button} ${isAnimating && classes.bump}`;

  const cartAmount = cartCtx.getTotalAmount();
  useEffect(() => {
    if (cartAmount === 0) return;

    setIsAnimating(true);
    identifier = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => {
      clearTimeout(identifier);
    };
  }, [cartAmount]);

  return (
    <button className={btnClasses} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.getTotalAmount()}</span>
    </button>
  );
};

export default HeaderCartButton;
