/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('World');
  React.useLayoutEffect(() => {
    if (name === 'Error') {
      throw new Error('Error');
    }
  });

  function handleChange(e) {
    setName(e.target.value);
  }

  if (name === 'renderException') {
    throw new Error('render exception');
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
