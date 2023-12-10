/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

import { slowEcho } from './utils/index.js';

function GreetingEditor() {
  const [name, setName] = useState(slowEcho('World'));

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick() {
    setTimeout(() => alert(name), 3000);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <button onClick={handleClick}>Show name</button>
    </>
  );
}

export default GreetingEditor;
