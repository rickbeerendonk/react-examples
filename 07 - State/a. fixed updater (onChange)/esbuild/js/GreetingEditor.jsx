/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('World');
  const [count, setCount] = useState(0);

  let cities = ['Oslo', 'Berg'];

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick() {
    setCount(c => c + 0.4);
    setCount(c => c + 0.6);
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <button onClick={handleClick}>I have been clicked {count} times</button>
    </>
  );
}

export default GreetingEditor;
