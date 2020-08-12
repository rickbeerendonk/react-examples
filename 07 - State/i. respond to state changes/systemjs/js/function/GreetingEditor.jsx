/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  React.useEffect(
    function () {
      if (name === 'React') {
        alert('Name === React');
      }
    },
    [name]
  );

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
