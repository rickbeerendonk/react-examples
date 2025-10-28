/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react';
import type { ChangeEvent } from 'react';

function GreetingEditor() {
  const [age, setAge] = useState<number>(0);
  let name = '';
  let setName: (value: string) => void = () => {};

  // Not allowed to use hooks conditionally!
  if (age === 0) {
    [name, setName] = useState<string>('World');
  }
  const [greeting, setGreeting] = useState<string>('Hello');

  // Not allowed to use hooks conditionally!
  // (here we make sure we always have the same number of hooks)
  if (age !== 0) {
    useState<string>('');
  }

  function handleAgeChange(e: ChangeEvent<HTMLInputElement>) {
    setAge(Number(e.target.value));
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
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
