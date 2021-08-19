/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Slow from './Slow';

function App() {
  const [name, setName] = React.useState('World');
  const deferredName = React.unstable_useDeferredValue(name, {
    timeoutMs: 2000
  });

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <Slow name={deferredName} />
    </React.Fragment>
  );
}

export default App;
