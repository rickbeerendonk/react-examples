/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function Greeting({ greeting, name }) {
  return (
    <h1>
      {greeting} {name}!
    </h1>
  );
}

export default Greeting;
