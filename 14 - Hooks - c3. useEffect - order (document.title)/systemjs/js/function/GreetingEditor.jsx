/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  // Effect 1 is always executed before Effect 2

  React.useEffect(() => {
    document.title = 'Effect 1: ' + name;
  }, [name]);

  React.useEffect(() => {
    document.title = 'Effect 2: ' + name;
  }, [name]);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
