import React, { useRef, useImperativeHandle } from 'react';

const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const inputFocus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { call: inputFocus };
  });

  return <input type="text" ref={inputRef} />;
});

const Test = () => {
  const inputRef = useRef();

  const clickHandler = () => {
    inputRef.current.call();
  };

  return (
    <React.Fragment>
      <FancyInput ref={inputRef} />
      <button onClick={clickHandler}>Focus</button>
    </React.Fragment>
  );
};

export default Test;
