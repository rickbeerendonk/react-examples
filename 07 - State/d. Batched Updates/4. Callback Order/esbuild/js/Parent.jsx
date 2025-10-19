/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { useState } from 'react';

import Child from './Child.jsx';

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // Batched:
    setCount(c => {
      console.log('getValue: Parent');
      return c + 1;
    });
  };

  return <Child count={count} onClick={handleClick} />;
}

export default Parent;
