/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function ClickMe({ value, setValue }) {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    // Updates are batched for performance reasons.
    // Therefore this won't work:

    // Set property
    setValue(0.4);

    // Use property to set state
    setCount(c => c + 0.6 + value);
  }

  return (
    <button onClick={handleClick}>
      This button has been clicked {count} times
    </button>
  );
}

export default ClickMe;
