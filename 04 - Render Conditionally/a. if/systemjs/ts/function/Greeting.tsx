/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

const Greeting: React.FC<IGreetingProps> = props => (
  <React.Fragment>
    <h3>Greeting:</h3>
    {
      // Only render when a name is truthy:
      props.name && <div>Hello {props.name}!</div>
    }
  </React.Fragment>
);

export default Greeting;
