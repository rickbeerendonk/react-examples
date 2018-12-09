/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function Greeting(props) {
  return (
    <i>
      {props.greeting} {props.name}
    </i>
  );
}

export default Greeting;
