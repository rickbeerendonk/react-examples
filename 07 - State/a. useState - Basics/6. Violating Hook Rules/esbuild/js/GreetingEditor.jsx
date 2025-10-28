/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react';

function GreetingEditor() {
  const [age, setAge] = useState(0);
  let name = '';
  let setName = () => {};

  // Not allowed to use hooks conditionally!
  if (age === 0) {
    [name, setName] = useState('World');
  }
  const [greeting, setGreeting] = useState('Hello');

  // Not allowed to use hooks conditionally!
  // (here we make sure we always have the same number of hooks)
  if (age !== 0) {
    useState('');
  }

  function handleAgeChange(e) {
    setAge(Number(e.target.value));
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input type="number" onChange={handleAgeChange} value={age} />
      <h2>Your age is {age} years.</h2>
      <input onChange={handleNameChange} value={name} />
      <h2>Hello {name}!</h2>
      <input onChange={e => setGreeting(e.target.value)} value={greeting} />
      <h2>{greeting}</h2>
    </>
  );
}

export default GreetingEditor;
