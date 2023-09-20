import React from 'react';

import InputGroup from './InputGroup';
import InputDetail from './InputDetail';

const InputList = (props) => {
  return (
    <div>
      <InputGroup>
        <InputDetail
          id="current-savings"
          type="number"
          onChangeInput={props.onChangeInputs}
        >
          Current Savings ($)
        </InputDetail>
        <InputDetail
          id="yearly-contribution"
          type="number"
          onChangeInput={props.onChangeInputs}
        >
          Yearly Savings ($)
        </InputDetail>
      </InputGroup>
      <InputGroup>
        <InputDetail
          id="expected-return"
          type="number"
          onChangeInput={props.onChangeInputs}
        >
          Expected Interest (%, per year)
        </InputDetail>
        <InputDetail
          id="duration"
          type="number"
          onChangeInput={props.onChangeInputs}
        >
          Investment Duration (years)
        </InputDetail>
      </InputGroup>
    </div>
  );
};
export default InputList;
