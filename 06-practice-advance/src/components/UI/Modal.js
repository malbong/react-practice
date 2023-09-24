import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

import Card from '../UI/Card';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal} onClick={props.onClose}>
      {props.children}
    </Card>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onCloseModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onCloseModal}>
          {props.children}
        </ModalOverlay>,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
