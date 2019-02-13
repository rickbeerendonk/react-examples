/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import useIsOnLine from './hooks/online';

function Greeting() {
  const isOnLine = useIsOnLine();
  return <h1>Hello {isOnLine ? 'OnLine' : 'OffLine'}!</h1>;
}

export default Greeting;
