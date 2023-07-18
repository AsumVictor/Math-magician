import React from 'react';
import Calculator from '../components/Calculator';

function CalculatorPage() {
  return (
    <div className="w-full grid grid-cols-2 px-2 md:px-10">
      <div className="mt-10 col-span-full md:col-span-1 flex items-center flex-col">
        <h2 className="font-bold text-2xl">Let us do some math</h2>
        <p>Make fun on the calculator! Congratulations</p>
      </div>
      <div className="mt-10 col-span-full md:col-span-1 flex justify-center">
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
