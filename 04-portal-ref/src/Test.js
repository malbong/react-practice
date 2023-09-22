import React, { useRef } from 'react';

const Test = () => {
  const inputRef = useRef();
  console.log(inputRef); // { current: undefined }

  const changeHandler = () => {
    console.log(inputRef); // { current: inputElement }
    console.log(inputRef.current); // inputElement
    console.log(inputRef.current.value); // the user input
  };

  const clickHandler = () => {
    // inputRef 를 이용하여 상태 올리기

    // inputRef 초기화
    inputRef.current.value = '';
  };

  return (
    <React.Fragment>
      <input type="text" ref={inputRef} onChange={changeHandler} />
      <button onClick={clickHandler}>Click</button>
    </React.Fragment>
  );
};
export default Test;
