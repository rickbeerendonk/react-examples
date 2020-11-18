/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

/* eslint no-console: 0 */

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  React.useEffect(
    // Use named function to describe what it does
    function setDocumentTitle() {
      // Complex logic (cough)
      document.title = name;
    },
    [name]
  );

  function handleChangeName(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChangeName} value={name} />
      <h1>Hello {name}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
