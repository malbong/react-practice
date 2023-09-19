import React, { useState } from 'react';

import styles from './Test.module.css';

const Test = () => {
  const [flag, setFlag] = useState(true);

  const toggleHandler = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  return (
    <div>
      <button onClick={toggleHandler}>toggle</button>
      <div className={`${styles['my-box']} ${flag ? styles.active : ''}`}>
        1
      </div>
    </div>
  );
};
export default Test;
