/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useState } from 'react';

/* eslint-disable react-compiler/react-compiler */

function GreetingEditor() {
  const [obj, setObj] = useState({ name: 'World' });

  const [other /*, setOther */] = useState('More state');

  function handleChange(e) {
    // React 16:
    // First update doesn't do anything because obj is still the same.
    // Internally React uses Object.is() to check this (on 1st update only!)
    //
    // React 17:
    // All updates don't do anything because obj remains the same.
    obj.name = e.target.value;
    setObj(obj);

    // Uncomment next line to also make previous setObj() succeed.
    // setOther(new Date().toISOString());
  }

  return (
    <>
      <input onChange={handleChange} value={obj.name} />
      <h1>Name: {obj.name}</h1>
      <h2>Other: {other}</h2>
    </>
  );
}

export default GreetingEditor;
