/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useEffect, useLayoutEffect, useState } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('World');
  useLayoutEffect(() => {
    if (name === 'layoutEffectError') {
      throw new Error('layoutEffectError');
    }

    return () => {
      if (name === 'cleanLayoutEffectError') {
        throw new Error('cleanLayoutEffectError');
      }
    };
  });

  useEffect(() => {
    if (name === 'effectError') {
      throw new Error('effectError');
    }

    return () => {
      if (name === 'cleanEffectError') {
        throw new Error('cleanEffectError');
      }
    };
  });

  function handleChange(e) {
    setName(e.target.value);
  }

  if (name === 'renderException') {
    throw new Error('render exception');
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <ul style={{ color: 'darkgrey' }}>
        <li>layoutEffectError</li>
        <li>cleanLayoutEffectError [during next render]</li>
        <li>effectError</li>
        <li>cleanEffectError [during next render]</li>
        <li>renderException</li>
      </ul>
    </>
  );
}

export default GreetingEditor;
