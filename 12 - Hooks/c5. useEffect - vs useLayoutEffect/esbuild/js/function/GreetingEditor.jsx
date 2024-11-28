/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useState, useEffect, useLayoutEffect } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('World');

  // LayoutEffects are always before Effects.
  // Effect 1 is always executed before Effect 2

  useEffect(
    function effect1() {
      console.log('Effect 1: ', name);
      return () => console.warn('Cleanup Effect 1: ', name);
    },
    [name]
  );

  useLayoutEffect(
    function layoutEffect1() {
      console.log('Layout Effect 1: ', name);
      return () => console.warn('Cleanup Layout Effect 1: ', name);
    },
    [name]
  );

  useEffect(
    function effect2() {
      console.log('Effect 2: ', name);
      return () => console.warn('Cleanup Effect 2: ', name);
    },
    [name]
  );

  useLayoutEffect(
    function layoutEffect2() {
      console.log('Layout Effect 2: ', name);
      return () => console.warn('Cleanup Layout Effect 2: ', name);
    },
    [name]
  );

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </>
  );
}

export default GreetingEditor;
