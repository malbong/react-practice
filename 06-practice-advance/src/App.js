import React from 'react';

import Header from './components/Header/Header';
import MealsSummary from './components/UI/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import { CartContextProvider } from './components/Context/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </CartContextProvider>
  );
};

export default App;
