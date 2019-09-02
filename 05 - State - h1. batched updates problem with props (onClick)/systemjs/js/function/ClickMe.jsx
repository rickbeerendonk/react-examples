/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function ClickMe({ value, onValueChange }) {
  const [count, setCount] = React.useState(0);

  return (
    <a
      onClick={() => {
        setCount(count + 0.4 + value);
        onValueChange(1);
        setCount(count + 0.6 + value);
      }}
    >
      This link has been clicked {count} times
    </a>
  );
}

export default ClickMe;
