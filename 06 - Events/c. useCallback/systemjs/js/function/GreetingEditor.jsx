/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

const handlers = new Set();

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  const changeHandler = function (e) {
    setName(e.target.value);
  };

  // const changeHandler = React.useCallback(
  //   function(e) {
  //     setName(e.target.value);
  //   },
  //   [setName]
  // );

  // Add handler to the set
  handlers.add(changeHandler);

  return (
    <React.Fragment>
      <input autoFocus onChange={changeHandler} value={name} />
      <h1>Hello {name}!</h1>
      <div>Number of handlers used: {handlers.size}</div>
    </React.Fragment>
  );
}

export default GreetingEditor;
