/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function GreetingEditor() {
  const [state, setState] = useState({
    name: 'World'
  });

  function handleClick() {
    // New object, but equal content
    setState({ ...state, name: 'World' });
  }

  console.log('render');

  return (
    <>
      <p style={{ color: 'gray' }}>Open console to see renders.</p>
      <button onClick={handleClick}>
        Click to see equal objects still re-rendering
      </button>
      <h1>Hello {state.name}!</h1>
    </>
  );
}

export default GreetingEditor;
