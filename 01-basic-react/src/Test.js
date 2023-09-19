import React, { useState } from 'react';

const Test = () => {
  const [flag, setFlag] = useState(true);

  const toggleHandler = () => {
    setFlag(!flag);
  };

  let toggleColor = flag ? 'red' : 'blue';

  return (
    <div>
      <button onClick={toggleHandler}>toggle</button>
      <div style={{ backgroundColor: toggleColor }}>BOX</div>
    </div>
  );
};

export default Test;
