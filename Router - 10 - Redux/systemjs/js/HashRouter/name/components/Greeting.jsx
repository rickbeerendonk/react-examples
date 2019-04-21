/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import React from 'react';

function Greeting({ name }) {
  return name && <h2>Hello {name}!</h2>;
}

export default Greeting;
