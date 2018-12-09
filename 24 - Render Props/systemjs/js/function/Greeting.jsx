/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function Greeting({ name, highlight }) {
  return <h1 style={highlight ? { color: 'red' } : null}>Hello {name}!</h1>;
}

export default Greeting;
