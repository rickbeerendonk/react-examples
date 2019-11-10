/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('Europe\nWorld');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <textarea autoFocus onChange={handleChange} value={name} />
      <pre>Hello {name}!</pre>
    </React.Fragment>
  );
}

export default GreetingEditor;
