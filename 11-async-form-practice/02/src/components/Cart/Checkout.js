import classes from './Checkout.module.css';

import useInput from '../Hooks/use-input';

const Checkout = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = useInput('', (value) => value.length >= 3);

  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetHasError,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
  } = useInput('', (value) => value.length >= 3);

  const {
    value: postalCode,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    changeHandler: postalCodeChangeHandler,
    blurHandler: postalCodeBlurHandler,
  } = useInput('', (value) => value.length >= 3);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
  } = useInput('', (value) => value.length >= 3);

  const nameInputClasses = `${classes.control} ${
    nameHasError ? classes.invalid : ''
  }`;

  const streetInputClasses = `${classes.control} ${
    streetHasError ? classes.invalid : ''
  }`;

  const postalCodeInputClasses = `${classes.control} ${
    postalCodeHasError ? classes.invalid : ''
  }`;

  const cityInputClasses = `${classes.control} ${
    cityHasError ? classes.invalid : ''
  }`;

  const formIsValid =
    nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();
    props.onSubmit({ name, street, postalCode, city });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <small className={classes.message}>name must be 3 length</small>
        )}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && (
          <small className={classes.message}>street must be 3 length</small>
        )}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          value={postalCode}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeHasError && (
          <small className={classes.message}>postalCode must be 3 length</small>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && (
          <small className={classes.message}>city must be 3 length</small>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
