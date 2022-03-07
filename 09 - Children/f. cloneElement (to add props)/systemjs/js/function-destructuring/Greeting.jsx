/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting({ greet, name }) {
  return (
    <i>
      {greet} {name}
    </i>
  );
}

export default Greeting;
