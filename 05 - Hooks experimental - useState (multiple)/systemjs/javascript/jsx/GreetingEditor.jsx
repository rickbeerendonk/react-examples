/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

// SystemJS limitation (we should be able to do this directly in import)
const { useState } = React;

function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function useStates(states) {
  const result = {};
  for (const prop in states) {
    const [value, setValue] = useState(states[prop]);
    result[prop] = value;
    result['set' + upperCaseFirst(prop)] = setValue;
  }
  return result;
}

function GreetingEditor() {
  const state = useStates({
    foo: 'Foo',
    bar: 123
  });

  return (
    <React.Fragment>
      <input onChange={e => state.setFoo(e.target.value)} value={state.foo} />
      <h1>Hello {state.foo}!</h1>

      <input
        onChange={e => state.setBar(Number(e.target.value))}
        value={state.bar}
      />
      <h1>Hello {state.bar}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
