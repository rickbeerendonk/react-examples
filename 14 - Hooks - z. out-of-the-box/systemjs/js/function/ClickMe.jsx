/* eslint no-console: 0 */

/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk, Oblicum !*/

import React from 'react';

function ClickMe() {
  let [count, setCount] = React.useState(0);

  function handleClick() {
    console.log('count (before): ', count);
    setCount(count); // Only leads to re-render if count has changed since previous render.
    count++;
    console.log('count (after): ', count);
  }

  return <a onClick={handleClick}>This link has been clicked {count} times</a>;
}

export default ClickMe;
