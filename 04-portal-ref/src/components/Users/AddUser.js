import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(nameInputRef); // {current:element}
    console.log(nameInputRef.current); // element

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;

/*
Effect == Side Effect
- 리액트의 메인은 UI를 랜더링하고 user input에 반응하는 것임
-> 그 밖에 모든 것을 Side Effect 라 함 (http 요청, localStorage, 오류처리 등)
-> 컴포넌트 함수 밖에서 해결해야할 일들임
-> http 요청이 일반적인 컴포넌트 안에 있다면, 재랜더링 중에 또 http요청을 할 것
-> 이를 위해 useEffect 훅을 사용

useEffect(callback, [...dependencies])

callback
- 사이드 이펙트 함수
- 만약 지정된 의존성이 변경될 경우 모든 컴포넌트 평가 후에 실행될 함수

dependencies
- 의존성 배열
- 해당 의존성이 변경되면 인자로 전해진 callback 이 재실행

- 이는 컴포넌트가 재평가 될 때 실행되는 것이 아닌 오직 의존성이 바뀔 때 실행되는 것


*/