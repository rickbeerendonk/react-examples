/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import Child from './Child';

function Parent() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    // Batched:
    setCount(c => c + 1);
  }

  return <Child count={count} onClick={handleClick} />;
}

export default Parent;
