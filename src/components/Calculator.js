import React from 'react';
import Screen from './Screen';
import Button from './Button';

function Calculator() {
  return (
    <div className="w-[9cm] md:w-[12cm] h-[9cm] md:h-[12cm] border m-10 grid grid-cols-4 grid-rows-6">
      <Screen />
      <Button value="AC" />
      <Button value="+/-" />
      <Button value="%" />
      <Button value="÷" classextend="bg-orange-500" />
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="×" classextend="bg-orange-500" />
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="-" classextend="bg-orange-500" />
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="+" classextend="bg-orange-500" />
      <Button value="0" classextend="col-span-2" />
      <Button value="." />
      <Button value="=" classextend="bg-orange-500" />
    </div>
  );
}

export default Calculator;
