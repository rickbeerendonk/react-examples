/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

function GreetingEditor() {
  const [name, setName] = useState(
    '<u onmouseover=alert("Hacked!")>Dangerous</u>'
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} size={50} />
      <h1>
        Hello <span dangerouslySetInnerHTML={{ __html: name }} />!
      </h1>
    </>
  );
}

export default GreetingEditor;
