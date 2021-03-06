/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  return React.createElement(
    'h1',
    { ref: props.forwardedRef },
    'Hello ',
    props.name,
    '!'
  );
}

export default Greeting;
