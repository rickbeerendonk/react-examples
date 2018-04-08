/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const Greeting = ({ name }) => React.createElement('h1', null, 'Hello ', name, '!');

export default Greeting;