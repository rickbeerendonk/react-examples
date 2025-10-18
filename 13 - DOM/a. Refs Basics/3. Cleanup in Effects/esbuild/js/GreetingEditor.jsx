/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useRef, useState, useLayoutEffect } from 'react';

function GreetingEditor() {
  const inputRef = useRef();
  const [name, setName] = useState('World');
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    // Create a const, because inputRef.current cannot be used in cleanup.
    const currentRef = inputRef.current;
    currentRef.select();

    return () => {
      // IMPORTANT: Can't use inputRef.current here,
      //            because it value might have been changed already
      //console.log('Remove ref (wrong): ', inputRef.current);
      console.log('Remove ref (right): ', currentRef);
    };
  }, [count]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleButtonClick() {
    setCount(c => c + 1);
  }

  return (
    <>
      <input onChange={handleChange} ref={inputRef} value={name} key={count} />
      {name && <h1>Hello {name}!</h1>}
      <br />
      <button onClick={handleButtonClick}>{count} + 1</button>
    </>
  );
}

export default GreetingEditor;
