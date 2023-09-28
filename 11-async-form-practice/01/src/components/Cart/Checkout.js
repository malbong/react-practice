import classes from './Checkout.module.css';

import useInput from '../Hooks/use-input';

const validateName = (value) => {
  return value.trim().length >= 2;
};

const validateEmail = (email) => {
  return email.includes('@') && email.length >= 6;
};

const validatePostal = (postal) => {
  return postal.length === 6 && postal.includes('-');
};

const validatePhonenumber = (pn) => {
  return pn.length === 8;
};

const Checkout = (props) => {
  const {
    value: name,
    status: nameStatus,
    isValid: nameIsValid,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = useInput('', validateName);

  const {
    value: email,
    status: emailStatus,
    isValid: emailIsValid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput('', validateEmail);

  const {
    value: postal,
    status: postalStatus,
    isValid: postalIsValid,
    changeHandler: postalChangeHandler,
    blurHandler: postalBlurHandler,
  } = useInput('', validatePostal);

  const {
    value: phonenumber,
    status: phonenumberStatus,
    isValid: phonenumberIsValid,
    changeHandler: phonenumberChangeHandler,
    blurHandler: phonenumberBlurHandler,
  } = useInput('', validatePhonenumber);

  const nameClasses = `${classes.control} ${
    nameStatus === 'none'
      ? ''
      : nameStatus === 'valid'
      ? classes.valid
      : classes.invalid
  }`;
  const emailClasses = `${classes.control} ${
    emailStatus === 'none'
      ? ''
      : emailStatus === 'valid'
      ? classes.valid
      : classes.invalid
  }`;
  const postalClasses = `${classes.control} ${
    postalStatus === 'none'
      ? ''
      : postalStatus === 'valid'
      ? classes.valid
      : classes.invalid
  }`;
  const phonenumberClasses = `${classes.control} ${
    phonenumberStatus === 'none'
      ? ''
      : phonenumberStatus === 'valid'
      ? classes.valid
      : classes.invalid
  }`;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (nameIsValid && emailIsValid && postalIsValid && phonenumberIsValid) {
      props.requestSend({ name, email, postal, phonenumber });
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        <div className={classes.message}>
          <small>name length must be more than 2</small>
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        <div className={classes.message}>
          <small>email must include '@' and be more than 6 length</small>
        </div>
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
          value={postal}
        />
        <div className={classes.message}>
          <small>postal only consists of number 6 and '-'</small>
        </div>
      </div>
      <div className={phonenumberClasses}>
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          type="text"
          id="phonenumber"
          onChange={phonenumberChangeHandler}
          onBlur={phonenumberBlurHandler}
          value={phonenumber}
        />
        <div className={classes.message}>
          <small>ex. 021-3231</small>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
