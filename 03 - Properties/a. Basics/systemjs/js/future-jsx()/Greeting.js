/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  // See: https://github.com/reactjs/rfcs/pull/107
  return React.jsx('h1', {
    children: ['Hello ', props.name, '!']
  });
}

export default Greeting;
