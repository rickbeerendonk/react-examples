/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useState } from 'react';

function ClickMe({ id }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(c => c + 1);
  }

  return (
    <button
      onClick={handleClick}
      style={{ viewTransitionName: `clickme${id}` }}
    >
      This button has been clicked {count} times
    </button>
  );
}

export default ClickMe;
