/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function Greeting() {
  return (
    <>
      <h1>Hello World!</h1>
      <Greeting />
    </>
  );
}

export default Greeting;
