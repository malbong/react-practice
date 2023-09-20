import React, { useState } from 'react';

import classes from './AddUser.module.css';
import Button from './UI/Button';
import Card from './UI/Card';
import ErrorModal from './ErrorModal';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const [error, setError] = useState(null);

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age. (non-empty values)',
      });

      return;
    }

    if (+age <= 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid age. (age > 0)',
      });

      return;
    }

    props.onAddUser(username, age);

    setUsername('');
    setAge('');
  };

  const errorClearHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorClearHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={usernameChangeHandler}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              onChange={ageChangeHandler}
              value={age}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
