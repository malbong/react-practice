import React, { useState } from 'react';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Result from './components/Result/Result';

function App() {
  const [resultsData, setResultsData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    let prevTotalInterest = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      const totalInterest = yearlyInterest + prevTotalInterest;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: totalInterest,
        investedCapital: currentSavings - totalInterest,
      });
      prevTotalInterest = yearlyInterest + prevTotalInterest;
    }

    setResultsData(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      <Result results={resultsData} />
    </div>
  );
}

export default App;
