/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [obj1, setObj1] = React.useState({ name: 'World' });
  const [obj2, setObj2] = React.useState({ name: 'World' });

  const [other, setOther] = React.useState('More state');

  function handleChange(e) {
    // 1. Only change obj1.name
    //
    // -- On 1st update only: --
    // First update doesn't do anything because obj is still the same.
    // Internally React uses Object.is() to check this (on 1st update only!)
    obj1.name1 = e.target.value;
    setObj1(obj1);

    // 2. Another update
    setOther(new Date().toISOString());

    // 3. Only change obj2.name
    //
    // -- On 2nd update: --
    // Although similar as -1-, this update does work
    // Object.is() check isn't done.
    obj2.name = e.target.value;
    setObj2(obj2);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={obj1.name} />
      <h1>Name1: {obj1.name}</h1>
      <h1>Name2: {obj2.name}</h1>
      <h2>Other: {other}</h2>
    </React.Fragment>
  );
}

export default GreetingEditor;
