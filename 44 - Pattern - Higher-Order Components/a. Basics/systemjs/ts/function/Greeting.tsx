/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name: string;
}

const Greeting: React.FC<IGreetingProps> = ({ name }) => <h1>Hello {name}!</h1>;

export default Greeting;
