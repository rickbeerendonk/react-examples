/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [obj, setObj] = React.useState({ name: 'World' });

  const [other /*, setOther */] = React.useState('More state');

  function handleChange(e) {
    // First update doesn't do anything because obj is still the same.
    // Internally React uses Object.is() to check this (on 1st update only!)
    obj.name = e.target.value;
    setObj(obj);

    // Uncomment next line to also make previous setObj() succeed.
    // setOther(new Date().toISOString());
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={obj.name} />
      <h1>Name: {obj.name}</h1>
      <h2>Other: {other}</h2>
    </React.Fragment>
  );
}

export default GreetingEditor;
