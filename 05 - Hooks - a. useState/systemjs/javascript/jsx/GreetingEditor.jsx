/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

// SystemJS limitation (we should be able to do this directly in import)
const { useState } = React;

function GreetingEditor() {
  const [name, setName] = useState('World');

  return (
    <React.Fragment>
      <input onChange={e => setName(e.target.value)} value={name} />
      <h1>Hello {name}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
