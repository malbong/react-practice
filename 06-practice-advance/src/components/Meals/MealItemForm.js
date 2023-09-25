import React, { useContext, useRef } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import CartContext from '../Context/CartContext';

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const inputRef = useRef();

  const addMealHandler = (e) => {
    e.preventDefault();

    cartCtx.addMeal(props.name, inputRef.current.getValue());
  };

  return (
    <form className={classes.form} onSubmit={addMealHandler}>
      <Input
        ref={inputRef}
        id={props.name}
        label="Amount: "
        type="number"
        min="1"
        max="5"
        defaultValue="1"
      />
      <button>+ ADD</button>
    </form>
  );
};

export default MealItemForm;
