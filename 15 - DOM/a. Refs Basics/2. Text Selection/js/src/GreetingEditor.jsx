/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useLayoutEffect, useRef, useState } from 'react';

function GreetingEditor() {
  const inputRef = useRef();
  const [name, setName] = useState('World');

  useLayoutEffect(() => inputRef.current.select(), [] /* Only run on mount */);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} ref={inputRef} value={name} />
      {name && <h1>Hello {name}!</h1>}
    </>
  );
}

export default GreetingEditor;
