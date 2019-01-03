/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      {// Change render based on name:
      name ? (
        <h1>Hello {name}!</h1>
      ) : (
        <h1 style={{ color: 'red' }}>No name provided.</h1>
      )}
    </React.Fragment>
  );
}

export default GreetingEditor;
