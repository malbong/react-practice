import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const getValue = () => {
    return inputRef.current.value;
  };

  useImperativeHandle(ref, () => {
    return { getValue };
  });

  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        id={props.id}
        type={props.type}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
      />
    </div>
  );
});

export default Input;
