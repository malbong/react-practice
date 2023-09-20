import React, { useState } from 'react';

import styles from './Form.module.css';
import InputList from './InputList';
import Action from './Action';

const initialData = {
  'current-savings': '',
  'yearly-contribution': '',
  'expected-return': '',
  duration: '',
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialData);

  const changeInputHandler = (id, value) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [id]: +value,
    }));
  };

  const resetInputHandler = () => {
    setUserInput(initialData);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(userInput);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <InputList onChangeInputs={changeInputHandler} />
      <Action onResetInputs={resetInputHandler} />
    </form>
  );
};

export default Form;
