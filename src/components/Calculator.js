import React from 'react';
import Screen from './Screen';
import Button from './Button';

function Calculator() {
  return (
    <div className='w-[9cm] md:w-[12cm] h-[9cm] md:h-[12cm] border m-10 grid grid-cols-4 grid-rows-6'>
      <Screen />
      <Button value={5}/>
      <Button value={5}/>
      <Button value={5}/>
      <Button value={5}classextend={'bg-orange-500'} />
      <Button value={5}/>
      <Button value={5}/>
      <Button value={5}/>
      <Button value={5}classextend={'bg-orange-500'} />
      <Button value={5}/>
      <Button value={5}/>
      <Button value={5}/>
      <Button value={5}classextend={'bg-orange-500'} />
      <Button value={5}/>
      <Button value={5}/>
      <Button value={5}/>
      <Button value={5}classextend={'bg-orange-500'} />
      <Button value={5}classextend={'col-span-2'}/>
      <Button value={5}/>
      <Button value={5}classextend={'bg-orange-500'} />
    </div>
  );
}

export default Calculator;
