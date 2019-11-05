/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting() {
  return (
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
}

export default Greeting;
