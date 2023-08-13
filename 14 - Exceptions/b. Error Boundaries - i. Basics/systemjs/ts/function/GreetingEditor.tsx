/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('World');
  React.useLayoutEffect(() => {
    if (name === 'layoutEffectError') {
      throw new Error('layoutEffectError');
    }

    return () => {
      if (name === 'cleanLayoutEffectError') {
        throw new Error('cleanLayoutEffectError');
      }
    };
  });

  React.useEffect(() => {
    if (name === 'effectError') {
      throw new Error('effectError');
    }

    return () => {
      if (name === 'cleanEffectError') {
        throw new Error('cleanEffectError');
      }
    };
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  if (name === 'renderException') {
    throw new Error('render exception');
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <ul style={{ color: 'darkgrey' }}>
        <li>layoutEffectError</li>
        <li>cleanLayoutEffectError [during next render]</li>
        <li>effectError</li>
        <li>cleanEffectError [during next render]</li>
        <li>renderException</li>
      </ul>
    </React.Fragment>
  );
}

export default GreetingEditor;
