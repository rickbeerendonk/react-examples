/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

/* eslint-warn react-compiler/react-compiler */

let oldName, oldSetName;

function GreetingEditor() {
  const [name, setName] = useState('World');

  useEffect(() => {
    /* eslint no-console: 0 */
    console.log(
      '[sameName, sameSetName]: [',
      oldName === name,
      ', ',
      oldSetName === setName,
      ']'
    );
    oldName = name;
    oldSetName = setName;
  }, [name, setName]);

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
