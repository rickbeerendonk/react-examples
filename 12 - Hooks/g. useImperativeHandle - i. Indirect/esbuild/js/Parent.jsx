/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useLayoutEffect, useRef } from 'react';

import Child from './Child.jsx';

function App() {
  const myChild = useRef();

  useLayoutEffect(() => {
    // myChild.current is a handle to do real DOM interactions.
    myChild.current.addText('Added by Parent');
  });

  return <Child name="Imperative Handle" ref={myChild} />;
}

export default App;
