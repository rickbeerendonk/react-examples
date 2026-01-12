/* eslint no-console: 0 */

/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk, Oblicum !*/

import { useState } from 'react';

function ClickMe() {
  let [count, setCount] = useState(0);

  function handleClick() {
    console.log('count (before): ', count);

    // Only leads to re-render if count has changed since previous render.
    // - count is updated here (wrong)
    // - count is set after call to setCount (wrong)
    setCount(count++);

    console.log('count (after): ', count);
  }

  console.log('render');

  return (
    <button onClick={handleClick}>
      This button has been clicked {count} times
    </button>
  );
}

export default ClickMe;
