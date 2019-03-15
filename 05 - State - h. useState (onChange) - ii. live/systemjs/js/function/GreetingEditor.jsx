/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('World');
  const liveName = React.useRef(name);

  function handleChange(e) {
    setName(e.target.value);
    liveName.current = e.target.value;
  }

  function handleClick() {
    setTimeout(() => alert(liveName.current), 3000);
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
