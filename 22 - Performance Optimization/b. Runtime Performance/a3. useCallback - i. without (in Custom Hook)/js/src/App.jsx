/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useEffect, useRef } from 'react';
import useToggle from './hooks/toggle.js';

export default function App() {
  const [value, toggle] = useToggle();
  const oldToggle = useRef(undefined);

  useEffect(() => {
    if (oldToggle.current && oldToggle.current !== toggle) {
      throw new Error('toggle function is recreated.');
    }

    oldToggle.current = toggle;
  }, [toggle]);

  return (
    <>
      <input type="checkbox" onChange={toggle} checked={value} />
      {` => ${value}`}
    </>
  );
}
