/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function Greeting(): JSX.Element {
  function handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    alert(`Event handled.
Target: ${e.currentTarget}
Value: ${e.currentTarget.value}`);
  }

  return <input onChange={handleChange} value="Hello World!" />;
}

export default Greeting;
