/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */

import React from 'react';

import Child from './Child';

function Parent() {
  const [count, setCount] = React.useState(0);
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
