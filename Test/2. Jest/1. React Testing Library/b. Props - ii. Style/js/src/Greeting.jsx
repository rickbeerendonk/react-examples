/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

function Greeting({ name, selected }) {
  return <h1 style={{ color: selected ? 'red' : 'black' }}>Hello {name}!</h1>;
}

export default Greeting;
