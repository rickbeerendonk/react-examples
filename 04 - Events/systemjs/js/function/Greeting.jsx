/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function Greeting() {
  function handleChange(e) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`);
  }

  return <input onChange={handleChange} value="Hello World!" />;
}

export default Greeting;
