import React from 'react';

import styles from './ErrorModal.module.css';
import Card from './UI/Card';
import Button from './UI/Button';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClose} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <p className={styles.content}>{props.message}</p>
        <div className={styles.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
