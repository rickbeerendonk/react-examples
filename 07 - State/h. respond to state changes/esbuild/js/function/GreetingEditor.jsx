/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('World');

  useEffect(() => {
    if (name === 'React') {
      alert('Name === React');
    }
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
