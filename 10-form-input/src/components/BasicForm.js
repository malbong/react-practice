import React from 'react';

import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameisValid,
    hasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput('', (value) => value.trim().length > 3);

  const {
    value: lastName,
    isValid: lastNameisValid,
    hasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput('', (value) => value.trim().length > 3);

  const {
    value: email,
    isValid: emailisValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput('', (value) => value.includes('@'));

  const firstNameClasses = `form-control ${firstNameHasError ? 'invalid' : ''}`;
  const lastNameClasses = `form-control ${lastNameHasError ? 'invalid' : ''}`;
  const emailClasses = `form-control ${emailHasError ? 'invalid' : ''}`;

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstNameisValid && lastNameisValid && emailisValid) {
      resetFirstName();
      resetLastName();
      resetEmail();

      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-mail</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
