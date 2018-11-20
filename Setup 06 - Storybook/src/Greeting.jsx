/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

const Greeting = ({ name }) => (name ? <h1>Hello {name}!</h1> : null);

export default Greeting;
