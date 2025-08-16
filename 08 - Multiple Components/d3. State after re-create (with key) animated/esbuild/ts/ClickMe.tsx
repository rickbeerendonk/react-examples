/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

interface ClickMeProps {
  id: number;
}

function ClickMe({ id }: ClickMeProps) {
  const [count, setCount] = useState<number>(0);

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
