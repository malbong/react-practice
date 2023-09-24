import React from 'react';

import meal from '../../assets/meals.jpg';
import classes from './Header.module.css';

import HeaderCartbutton from './HeaderCartButton';

const Header = () => {
  return (
    <header>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartbutton />
      </div>
      <div className={classes['main-image']}>
        <img src={meal} alt="meal" />
      </div>
    </header>
  );
};

export default Header;
