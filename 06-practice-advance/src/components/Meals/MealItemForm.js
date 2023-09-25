import React, { useState, useRef } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputRef = useRef();

  const inputProps = {
    id: props.id,
    type: 'number',
    min: '1',
    max: '5',
    defaultValue: '1',
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputRef.current.getValue();
    if (enteredAmount.trim().length === 0) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    props.addMealToCart(inputRef.current.getValue());
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={inputRef} label="Amount: " data={inputProps} />
      <button>+ ADD</button>
      {!amountIsValid && <small>Please enter a valid amount.</small>}
    </form>
  );
};

export default MealItemForm;
