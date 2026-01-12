/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useDeferredValue, useState } from 'react';

import Slow from './Slow.jsx';

export default function App() {
  // Regular state that updates immediately
  const [name, setName] = useState('World');

  // useDeferredValue creates a "deferred" version of the value
  // This allows React to prioritize updating the input first,
  // then update the slow component with the deferred value
  const deferredName = useDeferredValue(name);

  function handleChange(e) {
    // The input updates immediately with the latest value
    setName(e.target.value);
  }

  return (
    <>
      {/* Input stays responsive - uses the immediate 'name' value */}
      <input onChange={handleChange} value={name} />

      {/* Slow component gets the deferred value, allowing the input to remain responsive */}
      <Slow name={deferredName} />
    </>
  );
}
