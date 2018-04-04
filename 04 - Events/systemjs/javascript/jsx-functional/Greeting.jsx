/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const Greeting = () => { 
  const changed = (e) => alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`);

  return (
    <input onChange={changed} value='Hello World!' />
  )
};

export default Greeting;