/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import { slowEcho } from './utils/index';

function GreetingEditor() {
  const [name, setName] = React.useState(() => slowEcho('World'));

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick() {
    setTimeout(() => alert(name), 3000);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <button onClick={handleClick}>Show name</button>
    </React.Fragment>
  );
}

export default GreetingEditor;
