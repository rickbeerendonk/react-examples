/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk          !*/

import React from 'react';

/* eslint no-console:"off" */

export default function Child() {
  React.useEffect(() => {
    return () => {
      console.log('-- unmount Child --');
    };
  });

  return <h1>Child</h1>;
}
