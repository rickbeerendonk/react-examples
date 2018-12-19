/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

import './Greeting.css';

function Greeting({ name }) {
  return name ? <h1 className="greeting">Hello {name}!</h1> : null;
}

export default Greeting;
