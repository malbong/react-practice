import React from 'react';

import styles from './Action.module.css';
import Button from '../UI/Button';

const Action = (props) => {
  return (
    <p className={styles.actions}>
      <Button type="reset" className="buttonAlt" onClick={props.onResetInputs}>
        Reset
      </Button>
      <Button type="submit" className="button">
        Calculate
      </Button>
    </p>
  );
};

export default Action;
