/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useLayoutEffect, useRef } from 'react';

import Child from './Child.jsx';

export default function App() {
  const myChild = useRef();

  useLayoutEffect(() => {
    // myChild.current is a handle to do real DOM interactions.
    myChild.current.innerHTML = '<u>Added by Parent</u>';
  });

  return <Child name="Imperative Handle" ref={myChild} />;
}
