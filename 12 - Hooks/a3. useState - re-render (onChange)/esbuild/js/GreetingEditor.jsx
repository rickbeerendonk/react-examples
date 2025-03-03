/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function removeDuplicates(s) {
  return s
    .split('')
    .reduce(
      (acc, cur) => (acc && acc[acc.length - 1] === cur ? acc : acc + cur),
      ''
    );
}

function GreetingEditor() {
  const [name, setName] = useState('World');

  /* eslint no-console:"off" */
  console.log('render(): ', name);

  function handleChange(e) {
    console.log('event');
    setName(removeDuplicates(e.target.value));
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </>
  );
}

export default GreetingEditor;
