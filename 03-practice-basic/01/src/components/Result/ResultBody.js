import React from 'react';

const ResultBody = (props) => {
  const getFormattedNumber = (number) => {
    let ret = [];

    const arr = number.toFixed(2).split('').reverse();
    for (let i = 0; i < arr.length; ++i) {
      if (i > 3 && i % 3 === 0) ret.push(',');
      ret.push(arr[i]);
    }

    return ret.reverse().join('');
  };
  return (
    <tbody>
      <tr>
        <td>{props.data.year}</td>
        <td>${getFormattedNumber(props.data.savingsEndOfYear)}</td>
        <td>${getFormattedNumber(props.data.yearlyInterest)}</td>
        <td>${getFormattedNumber(props.data.totalInterest)}</td>
        <td>${getFormattedNumber(props.data.investedCapital)}</td>
      </tr>
    </tbody>
  );
};

export default ResultBody;
