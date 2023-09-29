import { useState, useEffect, useCallback } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../Hooks/use-http';

const url = 'https://react-post-35b9b-default-rtdb.firebaseio.com/meals.json';

const AvailableMeals = () => {
  const { isLoading, error, request } = useHttp();
  const [meals, setMeals] = useState([]);

  const setData = useCallback(async () => {
    const data = await request(url);

    const tmpMeals = [];
    for (const id in data) {
      tmpMeals.push({
        id,
        name: data[id].name,
        price: data[id].price,
        description: data[id].description,
      });
    }
    setMeals(tmpMeals);
  }, [request]);

  useEffect(() => {
    setData();
  }, [setData]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <h1>Loading...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.error}>
        <h1>{error}</h1>
      </section>
    );
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
