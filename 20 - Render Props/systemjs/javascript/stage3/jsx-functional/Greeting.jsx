/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const Greeting = ({name, highlight}) => (
  <h1 style={highlight ? {color: 'red'} : null}>Hello {name}!</h1>
);

export default Greeting;