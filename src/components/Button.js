import React from 'react';

function Button({value, classextend}) {
  return (
    <div className={`border flex items-center justify-center border-white bg-slate-200 text-black font-bold text-xl ${classextend} `}>
{value}
    </div>
  );
}

export default Button;
