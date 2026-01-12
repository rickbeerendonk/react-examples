/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { useEffect } from 'react';

import Child from './Child.jsx';

export default function Praent() {
  useEffect(() => {
    return () => {
      console.log('-- unmount Parent --');
    };
  });

  return (
    <>
      <h1>Parent</h1>
      <Child />
    </>
  );
}
