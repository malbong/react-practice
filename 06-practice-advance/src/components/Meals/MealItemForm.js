import React from 'react';

import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = () => {
  const addMealHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={addMealHandler}>
      <Input label="Amount: " type="number" min="0" />
      <button>+ ADD</button>
    </form>
  );
};

export default MealItemForm;
