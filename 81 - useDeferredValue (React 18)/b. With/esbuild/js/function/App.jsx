/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useDeferredValue, useState } from 'react';

import Slow from './Slow.jsx';

function App() {
  const [name, setName] = useState('World');
  const deferredName = useDeferredValue(name, {
    timeoutMs: 2000
  });

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      <Slow name={deferredName} />
    </>
  );
}

export default App;
