/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useState } from 'react';

export default function App() {
  // Keep form data in state
  const [name, setName] = useState('');

  function handleSubmit(e) {
    // 1. Prevent the browser from doing the default action (and navigating away from our page/app)
    e.preventDefault();

    // 2. Handle data
    alert(`Name = ${name}`);

    // 3. Clear data
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input id="name" onChange={e => setName(e.target.value)} value={name} />
      <button type="submit">Submit</button>
    </form>
  );
}
