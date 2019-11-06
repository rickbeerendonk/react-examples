/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting({ greeting, name }) {
  return (
    <i>
      {greeting} {name}
    </i>
  );
}

export default Greeting;
