/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  return React.createElement(
    'h1',
    null,
    'Hello ',
    Array(props.count).fill(props.name).join(' '),
    '!'
  );
}

export default Greeting;
