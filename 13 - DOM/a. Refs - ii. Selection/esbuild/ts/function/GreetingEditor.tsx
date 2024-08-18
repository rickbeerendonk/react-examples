/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useEffect, useRef, useState } from 'react';

function GreetingEditor(): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('World');
  useEffect(() => inputRef.current.select(), [] /* Only run on mount */);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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
