/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const Greeting = () => (
  <h1
    style={{
      transform: 'rotate(10deg) translateY(100px)',
      msTransform: 'rotate(10deg) translateY(100px)',
      WebkitTransform: 'rotate(10deg) translateY(100px)'
    }}
  >
    Hello World!
  </h1>
);

export default Greeting;
