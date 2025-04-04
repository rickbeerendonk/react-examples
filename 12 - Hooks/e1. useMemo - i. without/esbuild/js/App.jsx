/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

import { slowDivision } from './utils/index.js';

export default function App() {
  const [count, setCount] = useState(0);

  const numerator = Math.round(count / 3);
  const denominator = 2;

  // Slow operation, but we don't use useMemo() to memoize the result:
  const result = slowDivision(numerator, denominator);

  function handleClick() {
    setCount(c => c + 1);
  }

  return (
    <>
      <div style={{ color: 'darkgray' }}>
        Open the console and observe when the result is calculated.
      </div>
      <div>
        <button onClick={handleClick}>Change count {count}</button>
      </div>
      <div>
        <span>
          {numerator} divided by {denominator} is equal to{' '}
        </span>
        {result}.
      </div>
    </>
  );
}
