import React, { useState } from 'react';

import Header from './components/Header/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import { CartContextProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';

const App = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const closeHandler = () => {
    setIsCartModalOpen(false);
  };

  const openHandler = () => {
    setIsCartModalOpen(true);
  };

  return (
    <CartContextProvider>
      {isCartModalOpen && <Cart onClose={closeHandler} />}
      <Header onClose={closeHandler} onOpen={openHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartContextProvider>
  );
};

export default App;
