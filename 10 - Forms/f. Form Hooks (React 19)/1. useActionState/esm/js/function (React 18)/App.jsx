/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    // Prevent the browser from doing the default action (and navigating away from our page/app)
    e.preventDefault();

    // Handle data
    setList(lst => [...lst, name]);

    // Clear data
    setName('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" onChange={e => setName(e.target.value)} value={name} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
