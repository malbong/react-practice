import React, { useState } from 'react';

const Test = () => {
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <p>{value}</p>
      <input type="text" value={value} onChange={changeHandler} />
    </div>
  );
};

export default Test;
