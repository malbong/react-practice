import React from 'react';

import classes from './AvailableMeals.module.css';

import Card from '../UI/Card';
import DUMMY_MEALS from './dummy-meals';
import MealItem from './MealItem';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Card className={classes.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};

export default AvailableMeals;
