import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator2 = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  return (
    <div className="cointainer2">
      <div>
        This is a big ass test
        {' '}
        {count}
      </div>
    </div>
  );
};

export default Calculator2;
