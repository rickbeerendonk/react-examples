/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import useMousePosition from './hooks/mousepos';

function GreetingEditor() {
  const [name, setName] = React.useState('World');
  const mousePosition = useMousePosition();

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>
        Hello {name}!{' '}
        {mousePosition.X && (
          <span>
            ({mousePosition.X}, {mousePosition.Y})
          </span>
        )}
      </h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
