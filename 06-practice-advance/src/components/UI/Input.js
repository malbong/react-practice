import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input type={props.type} min={props.min} value={props.value} />
    </div>
  );
};

export default Input;
