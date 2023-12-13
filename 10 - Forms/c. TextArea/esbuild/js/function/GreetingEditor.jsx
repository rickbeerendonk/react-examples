/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('Europe\nWorld');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <textarea autoFocus onChange={handleChange} value={name} />
      <pre>Hello {name}!</pre>
    </>
  );
}

export default GreetingEditor;
