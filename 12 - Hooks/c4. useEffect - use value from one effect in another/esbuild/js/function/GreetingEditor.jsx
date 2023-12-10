/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState, useEffect, useRef } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('World');
  const containerRef = useRef();
  const inputRef = useRef();

  // Effect 1 is always executed before Effect 2

  // Effect 1
  useEffect(() => {
    // Preserve the container pointer for teardown
    const container = containerRef.current;
    const input = document.createElement('input');
    inputRef.current = input;
    container.appendChild(inputRef.current);

    console.log('Effect 1');

    return () => {
      container.removeChild(input);
    };
  }, [name]);

  // Effect 2
  useEffect(() => {
    // Use input created in Effect1 (proofs it is executed first)
    inputRef.current.value = name;
    //document.querySelector('#container input').value = name;

    console.log('Effect 2');
  }, [name]);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <div ref={containerRef} id="container" />
    </>
  );
}

export default GreetingEditor;
