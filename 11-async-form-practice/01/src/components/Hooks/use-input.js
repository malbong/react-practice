import { useState } from 'react';

const useInput = (initValue, validateValue) => {
  const [value, setValue] = useState(initValue);
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  let status = 'none';
  if (isTouched) status = isValid ? 'valid' : 'invalid';

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const resetHandler = () => {
    setValue(initValue);
    setIsTouched(false);
  };

  return {
    value,
    status,
    isValid,
    changeHandler,
    blurHandler,
    resetHandler,
  };
};

export default useInput;
