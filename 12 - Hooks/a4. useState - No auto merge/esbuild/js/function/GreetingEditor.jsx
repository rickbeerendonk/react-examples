/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function GreetingEditor() {
  const [state, setState] = useState({
    name: 'World',
    other: 'More state'
  });

  function handleChange(e) {
    setState({ ...state, name: e.target.value });
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={state.name} />
      <h1>Hello {state.name}!</h1>
      <h2>{state.other}</h2>
    </>
  );
}

export default GreetingEditor;
