/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  return (
    <i>
      {props.greet} {props.name}
    </i>
  );
}

export default Greeting;
