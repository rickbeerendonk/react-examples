/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const inputRef = React.useRef(null);
  const [name, setName] = React.useState('World');
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
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
    <React.Fragment>
      <input onChange={handleChange} ref={inputRef} value={name} key={count} />
      {name && <h1>Hello {name}!</h1>}
      <br />
      <button onClick={handleButtonClick}>{count} + 1</button>
    </React.Fragment>
  );
}

export default GreetingEditor;
