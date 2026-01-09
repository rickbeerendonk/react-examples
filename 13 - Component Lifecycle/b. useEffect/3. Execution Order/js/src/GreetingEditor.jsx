/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState, useEffect } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('World');

  // Effect 1 is always executed before Effect 2

  useEffect(() => {
    document.title = 'Effect 1: ' + name;
  }, [name]);

  useEffect(() => {
    document.title = 'Effect 2: ' + name;
  }, [name]);

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
