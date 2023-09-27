import { useState, useEffect } from 'react';

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const sign = forwards ? +1 : -1;

    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + sign);
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};
export default useCounter;
