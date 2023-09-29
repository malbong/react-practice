import { useState } from 'react';

const useInput = (initValue, validateValue) => {
  const [value, setValue] = useState(initValue);
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = isTouched && !isValid;

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  return {
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
  };
};

export default useInput;
