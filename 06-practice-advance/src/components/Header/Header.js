import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

import HeaderCartbutton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartbutton onClose={props.onClose} onOpen={props.onOpen} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="meal" />
      </div>
    </React.Fragment>
  );
};

export default Header;
