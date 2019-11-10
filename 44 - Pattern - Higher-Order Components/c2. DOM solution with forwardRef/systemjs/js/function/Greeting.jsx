/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  return <h1 ref={props.forwardedRef}>Hello {props.name}!</h1>;
}

export default Greeting;