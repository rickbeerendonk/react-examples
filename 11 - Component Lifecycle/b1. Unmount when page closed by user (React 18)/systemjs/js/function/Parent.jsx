/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import React from 'react';

import Child from './Child';

export default function Praent() {
  React.useEffect(() => {
    return () => {
      console.log('-- unmount Parent --');
    };
  });

  return (
    <React.Fragment>
      <h1>Parent</h1>
      <Child />
    </React.Fragment>
  );
}
