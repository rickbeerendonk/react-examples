/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { useEffect } from 'react';

export default function Child() {
  useEffect(() => {
    return () => {
      console.log('-- unmount Child --');
    };
  });

  return <h1>Child</h1>;
}
