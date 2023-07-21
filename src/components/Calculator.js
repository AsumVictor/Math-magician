import React, { useState } from 'react';
import Screen from './Screen';
import Button from './Button';
import calculate from '../logic/Calculator';

function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const makeCalculations = (e) => {
    const buttonName = e.currentTarget.textContent;
    const newState = calculate(calculation, buttonName);
    setCalculation(newState);
  };

  const { total, next, operation } = calculation;

  return (
    <div className="w-[9cm] md:w-[12cm] h-[9cm] md:h-[12cm] border m-10 grid grid-cols-4 grid-rows-6 ">
      <Screen total={total} next={next} operation={operation} />
      <Button handleClick={(e) => makeCalculations(e)} value="AC" />
      <Button handleClick={(e) => makeCalculations(e)} value="+/-" />
      <Button handleClick={(e) => makeCalculations(e)} value="%" />
      <Button handleClick={(e) => makeCalculations(e)} value="÷" classextend="bg-orange-500" />
      <Button handleClick={(e) => makeCalculations(e)} value="7" />
      <Button handleClick={(e) => makeCalculations(e)} value="8" />
      <Button handleClick={(e) => makeCalculations(e)} value="9" />
      <Button handleClick={(e) => makeCalculations(e)} value="x" classextend="bg-orange-500" />
      <Button handleClick={(e) => makeCalculations(e)} value="4" />
      <Button handleClick={(e) => makeCalculations(e)} value="5" />
      <Button handleClick={(e) => makeCalculations(e)} value="6" />
      <Button handleClick={(e) => makeCalculations(e)} value="-" classextend="bg-orange-500" />
      <Button handleClick={(e) => makeCalculations(e)} value="1" />
      <Button handleClick={(e) => makeCalculations(e)} value="2" />
      <Button handleClick={(e) => makeCalculations(e)} value="3" />
      <Button handleClick={(e) => makeCalculations(e)} value="+" classextend="bg-orange-500" />
      <Button handleClick={(e) => makeCalculations(e)} value="0" classextend="col-span-2 bg-slate-200 text-black" />
      <Button handleClick={(e) => makeCalculations(e)} value="." />
      <Button handleClick={(e) => makeCalculations(e)} value="=" classextend="bg-orange-500" />
    </div>
  );
}

export default Calculator;
