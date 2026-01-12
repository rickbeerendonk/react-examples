/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

import Slow from './Slow.jsx';

export default function App() {
  const [name, setName] = useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      <Slow name={name} />
    </>
  );
}
