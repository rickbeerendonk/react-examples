/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */
/* eslint react/prop-types:"off" */

import React from 'react';

const Greeting = ({ name }) => {
  /***/ console.log('Greeting - render()');

  return <h1>Hello {name}!</h1>;
};

export default Greeting;
