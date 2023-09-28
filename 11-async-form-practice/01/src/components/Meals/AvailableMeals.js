import { useEffect, useState, useCallback } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import useHttp from '../Hooks/use-http';

import classes from './AvailableMeals.module.css';

const url = 'https://react-post-35b9b-default-rtdb.firebaseio.com/meals.json';

const AvailableMeals = () => {
  const { isLoading, error, request } = useHttp();

  const [meals, setMeals] = useState([]);

  const setData = useCallback(async () => {
    const data = await request(url);

    const newMeals = [];
    for (const id in data) {
      newMeals.push({
        id,
        name: data[id].name,
        description: data[id].description,
        price: data[id].price,
      });
    }

    setMeals(newMeals);
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

  let content = mealsList;

  if (isLoading) content = <h3>...Loading...</h3>;

  if (error)
    content = (
      <h3 className={classes.error}>
        {error}...{' '}
        <button className={classes.reload} onClick={setData}>
          Reload
        </button>
      </h3>
    );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
