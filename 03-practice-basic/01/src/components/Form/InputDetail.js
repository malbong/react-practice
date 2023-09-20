import React from 'react';

import styles from './InputDetail.module.css';

const InputDetail = (props) => {
  const changeHandler = (e) => {
    props.onChangeInput(props.id, e.target.value);
  };

  return (
    <p>
      <label className={styles.label} htmlFor={props.id}>
        {props.children}
      </label>
      <input
        className={styles.input}
        type={props.type}
        id={props.id}
        onChange={changeHandler}
      />
    </p>
  );
};

export default InputDetail;
