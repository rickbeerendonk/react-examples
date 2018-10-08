/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const Greeting = props => {
  return <h1>Hello {props.name}!</h1>;
};
Greeting.defaultProps = { name: 'World' };

export default Greeting;
