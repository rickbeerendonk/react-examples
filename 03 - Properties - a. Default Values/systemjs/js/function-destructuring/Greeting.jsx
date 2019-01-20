/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting({ name = 'World' }) {
  return <h1>Hello {name}!</h1>;
}

export default Greeting;
