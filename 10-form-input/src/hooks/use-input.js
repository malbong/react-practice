import { useState } from 'react';

const useInput = (initValue, validateValue) => {
  const [value, setValue] = useState(initValue);
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = isTouched && !isValid;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const blurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue(initValue);
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};
export default useInput;
