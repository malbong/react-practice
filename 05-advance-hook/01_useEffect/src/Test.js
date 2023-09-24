import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [userInput, setUserInput] = useState(0);

  useEffect(() => {
    console.log('effect: non-params');
  });
  useEffect(() => {
    console.log('effect: empty-array');
  }, []);
  useEffect(() => {
    console.log('effect: userInput');
  }, [userInput]);

  useEffect(() => {
    return () => {
      console.log('cleanup');
    };
  }, [userInput]);

  const changeInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  return <input type="text" onChange={changeInputHandler} />;
};

const Test = () => {
  const [isMounted, setIsMounted] = useState(true);

  const toggleHandler = () => {
    setIsMounted((prev) => !prev);
  };

  return (
    <React.Fragment>
      {isMounted && <Effect />}
      {!isMounted && <h1>EMPTY</h1>}
      <button onClick={toggleHandler}>toggle</button>
    </React.Fragment>
  );
};

export default Test;
