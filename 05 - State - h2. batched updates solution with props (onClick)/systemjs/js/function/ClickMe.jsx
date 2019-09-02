/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function ClickMe({ value, onValueChange }) {
  const latestValue = React.useRef(null);
  latestValue.current = value;

  const [count, setCount] = React.useState(0);

  return (
    <a
      onClick={() => {
        setCount(c => c + 0.4 + latestValue.current);
        onValueChange(1);
        setCount(c => c + 0.6 + latestValue.current);
      }}
    >
      This link has been clicked {count} times
    </a>
  );
}

export default ClickMe;
