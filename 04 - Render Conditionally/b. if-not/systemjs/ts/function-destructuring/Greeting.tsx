/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

const Greeting: React.FC<IGreetingProps> = ({ name }) => (
  <React.Fragment>
    <h3>Greeting:</h3>
    {
      // Only render when a not-name is falsy:
      !name || <div>Hello {name}!</div>
    }
  </React.Fragment>
);

export default Greeting;
