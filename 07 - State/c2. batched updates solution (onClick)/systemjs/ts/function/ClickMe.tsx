/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

const ClickMe: React.FC = () => {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    // Updates are batched for performance reasons.
    // Therefore a callback should be used:
    setCount(c => c + 0.4);
    setCount(c => c + 0.6);
  }

  return (
    <button onClick={handleClick}>
      This button has been clicked {count} times
    </button>
  );
};

export default ClickMe;
