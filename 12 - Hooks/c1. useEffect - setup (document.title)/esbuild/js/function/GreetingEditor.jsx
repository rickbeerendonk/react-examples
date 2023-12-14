/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint no-console: 0 */

import { useState, useEffect } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('World');
  const [other, setOther] = useState('Other');

  // 2nd parameter:
  // - None: Always updates
  // - []: Only updates first time (wrong)
  // - [name]: Only updates if name changes
  useEffect(() => {
    console.count('effect');
    document.title = name;
  }, [name]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeOther(e) {
    setOther(e.target.value);
  }

  return (
    <>
      <input onChange={handleChangeName} value={name} />
      <h1>Hello {name}!</h1>
      <input onChange={handleChangeOther} value={other} />
      <h2>Hello {other}!</h2>
    </>
  );
}

export default GreetingEditor;
