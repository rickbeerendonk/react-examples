/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState, useMemo } from 'react';

import { slowDivision } from './utils/index.js';

function App() {
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(2);

  // useMemo() will memoize the result, because the calculation is slow:
  const memoizedResult = useMemo(
    () => slowDivision(numerator, denominator),
    [numerator, denominator]
  );

  function handleNumeratorChange(e) {
    setNumerator(Number(e.target.value));
  }
  function handleDenominatorChange(e) {
    setDenominator(Number(e.target.value));
  }

  return (
    <>
      <div style={{ color: 'darkgray' }}>
        Open the console and observe the result is calculated on every change.
      </div>
      <div>
        <input
          onChange={handleNumeratorChange}
          type="number"
          value={numerator}
        />
        <span> divided by </span>
        <input
          autoFocus
          onChange={handleDenominatorChange}
          type="number"
          value={denominator}
        />
        <span> is equal to </span>
        {memoizedResult}.
      </div>
    </>
  );
}

export default App;
