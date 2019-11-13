/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function ClickMe() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(c => c + 1);
  }
  return <a onClick={handleClick}>This link has been clicked {count} times</a>;
}

export default ClickMe;
