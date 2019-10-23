/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>
        {// Change render based on name:
        name ? (
          <React.Fragment>
            <u>Hello</u> {name}!
          </React.Fragment>
        ) : (
          <span style={{ color: 'red' }}>No name provided.</span>
        )}
      </h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
