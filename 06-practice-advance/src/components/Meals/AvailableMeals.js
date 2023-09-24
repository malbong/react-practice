import React from 'react';

import classes from './AvailableMeals.module.css';

import Card from '../UI/Card';
import DUMMY_MEALS from './dummy-meals';
import MealItem from './MealItem';

const AvailableMeals = () => {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
