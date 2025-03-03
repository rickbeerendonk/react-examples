/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useState } from 'react';

import Child from './Child.jsx';

function Parent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // Batched:
    setCount(c => c + 1);
  }

  return <Child count={count} onClick={handleClick} />;
}

export default Parent;
