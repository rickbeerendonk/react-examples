/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';

import './Greeting.css';

function Greeting() {
  return (
    <>
      <h1 className="greeting" data-testid="greeting-testid">
        Hello World!
      </h1>
    </>
  );
}

export default Greeting;
