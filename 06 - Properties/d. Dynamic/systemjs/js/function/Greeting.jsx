/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  return <h1>Hello {Array(props.count).fill(props.name).join(' ')}!</h1>;
}

export default Greeting;
