/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name: string;
}

const Greeting: React.FC<IGreetingProps> = props => (
  <h1>Hello {props.name}!</h1>
);

export default Greeting;
