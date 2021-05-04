/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function ClickMe() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(c => c + 1);
  }
  return (
    <button onClick={handleClick}>
      This button has been clicked {count} times
    </button>
  );
}

export default ClickMe;
