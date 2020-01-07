/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

const Greeting: React.FC = () => (
  <React.Fragment>
    <h1>Hello World!</h1>
    <Greeting />
  </React.Fragment>
);

export default Greeting;
