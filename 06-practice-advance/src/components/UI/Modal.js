import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

import Card from '../UI/Card';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={classes.modal}>{props.children}</Card>;
};

const overlayRootElement = document.getElementById('overlay-root');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        overlayRootElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayRootElement
      )}
    </React.Fragment>
  );
};

export default Modal;
