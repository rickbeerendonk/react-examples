/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useState } from 'react';

import useLifecycle from './hooks/lifecycle.js';

function GreetingEditor() {
  const [name, setName] = useState('World');
  const [other, setOther] = useState('Other');

  useLifecycle(
    () => (document.title = 'Mount: ' + name),
    () => (document.title = 'Update: ' + name)
  );

  function handleChange1(e) {
    setName(e.target.value);
  }

  function handleChange2(e) {
    setOther(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange1} value={name} />
      <h1>Hello {name}!</h1>
      <input onChange={handleChange2} value={other} />
      <h2>Hello {other}!</h2>
    </>
  );
}

export default GreetingEditor;
