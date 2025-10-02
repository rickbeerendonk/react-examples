/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useDeferredValue, useState } from 'react';

import Slow from './Slow.jsx';

export default function App() {
  const [name, setName] = useState('World');

  // React 19: useDeferredValue with initialValue parameter
  // On initial render, deferredName will be '' (empty string)
  // Then React schedules a re-render with the actual value
  const deferredName = useDeferredValue(name, '');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <h2>useDeferredValue with initialValue (React 19)</h2>
      <p>The second parameter provides an initial value for the first render</p>
      <input onChange={handleChange} value={name} placeholder="Type here..." />
      <Slow name={deferredName} />
    </>
  );
}
