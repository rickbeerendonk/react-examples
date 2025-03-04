/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

import { useRef } from 'react';

export default function App() {
  const myRef = useRef();
  const id = 1;
  return (
    <>
      <div draggable={true} />
      <div key={id} />
      <div ref={myRef} />
      <div data-key={id} />
    </>
  );
}
