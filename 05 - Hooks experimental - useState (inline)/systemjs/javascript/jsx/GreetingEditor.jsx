/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

function MyInput(props) {
  return <input {...props} />;
}

function useState(value, callback) {
  const state = React.useState(value);
  return [state[0], (...args) => state[1](callback(...args))];
}

function GreetingEditor() {
  // Should use useCallback()
  // see: https://reactjs.org/docs/hooks-reference.html#usecallback

  // Prevent rerender of MyInput due to use of inline method
  const [name, setNameMapped] = useState('foo', /* map */ e => e.target.value);

  return (
    <React.Fragment>
      <MyInput onChange={setNameMapped} value={name} />
      <h1>Hello {name}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
