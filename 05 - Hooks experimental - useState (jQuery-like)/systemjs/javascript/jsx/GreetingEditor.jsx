/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

function useState(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  return function(newValue) {
    if (newValue === undefined) {
      return value;
    } else {
      setValue(newValue);
    }
  };
}

function GreetingEditor() {
  const name = useState('Foo');

  return (
    <React.Fragment>
      <input onChange={e => name(e.target.value)} value={name()} />
      <h1>Hello {name()}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
