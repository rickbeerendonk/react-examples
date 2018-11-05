/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

function Greeting(props) {
  return React.createElement('h1', null, 'Hello ', props.name, '!');
}

export default Greeting;
