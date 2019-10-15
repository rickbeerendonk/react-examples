/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function useCurrentState(init) {
  const [val, setVal] = React.useState(init);
  const ref = React.useRef();
  ref.current = val;
  const result = React.useCallback(
    value => {
      if (value !== undefined) {
        setVal(value);
      } else {
        return ref.current;
      }
    },
    [ref]
  );

  return result;
}

function GreetingEditor() {
  const name = useCurrentState('World');

  function handleChange(e) {
    name(e.target.value);
  }

  function handleClick() {
    setTimeout(() => alert(name()), 3000);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name()} />
      <h1>Hello {name()}!</h1>
      <button onClick={handleClick}>Show name</button>
    </React.Fragment>
  );
}

export default GreetingEditor;
