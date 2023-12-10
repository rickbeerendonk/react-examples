/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint no-console: 0 */

import { useEffect, useState } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('World');

  useEffect(
    // Use named function to describe what it does
    function setDocumentTitle() {
      // Complex logic (cough)
      document.title = name;
    },
    [name]
  );

  function handleChangeName(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input autoFocus onChange={handleChangeName} value={name} />
      <h1>Hello {name}!</h1>
    </>
  );
}

export default GreetingEditor;
