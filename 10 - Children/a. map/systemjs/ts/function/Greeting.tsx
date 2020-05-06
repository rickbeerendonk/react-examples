/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name: string;
}

const Greeting: React.FC<IGreetingProps> = props => <i>Hello {props.name}</i>;

export default Greeting;
