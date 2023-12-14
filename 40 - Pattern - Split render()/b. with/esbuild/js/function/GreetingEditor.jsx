/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function GreetingEditor({ languages }) {
  const [name, setName] = useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  function renderDK() {
    return languages.includes('dk') && name && <h1>DK: Hej {name}!</h1>;
  }
  function renderEN() {
    return languages.includes('en') && name && <h1>EN: Hello {name}!</h1>;
  }
  function renderNL() {
    return languages.includes('nl') && name && <h1>NL: Hallo {name}!</h1>;
  }
  function renderNO() {
    return languages.includes('no') && name && <h1>NO: Hallo {name}!</h1>;
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      {renderDK()}
      {renderEN()}
      {renderNL()}
      {renderNO()}
    </>
  );
}

export default GreetingEditor;
