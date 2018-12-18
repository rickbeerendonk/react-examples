/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function Greeting(props) {
  return React.createElement(
    'h1',
    { ref: props.ref },
    'Hello ',
    props.name,
    '!'
  );
}

export default Greeting;
