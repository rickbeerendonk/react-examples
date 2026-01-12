/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function ClickMe() {
  const [count, setCount] = useState(0);

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
