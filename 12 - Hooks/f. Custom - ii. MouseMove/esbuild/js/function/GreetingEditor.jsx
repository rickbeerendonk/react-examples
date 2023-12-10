/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

import useMousePosition from './hooks/mousepos.js';

function GreetingEditor() {
  const [name, setName] = useState('World');
  const mousePosition = useMousePosition();

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>
        Hello {name}!{' '}
        {mousePosition.x !== undefined && (
          <span>
            ({mousePosition.x}, {mousePosition.y})
          </span>
        )}
      </h1>
    </>
  );
}

export default GreetingEditor;
