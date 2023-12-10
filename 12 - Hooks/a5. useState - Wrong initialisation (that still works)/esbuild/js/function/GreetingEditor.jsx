/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function GreetingEditor() {
  const [name = 'World', setName] = useState();

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </>
  );
}

export default GreetingEditor;
