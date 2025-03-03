/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function Divider() {
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(2);

  function handleNumeratorChange(e) {
    setNumerator(Number(e.target.value));
  }

  function handleDenominatorChange(e) {
    setDenominator(Number(e.target.value));
  }

  if (!denominator) {
    throw new Error('Division by zero.');
  }

  return (
    <div>
      <input onChange={handleNumeratorChange} type="number" value={numerator} />
      <span> divided by </span>
      <input
        autoFocus
        onChange={handleDenominatorChange}
        type="number"
        value={denominator}
      />
      <span> is equal to </span>
      {numerator / denominator}.
    </div>
  );
}

export default Divider;
