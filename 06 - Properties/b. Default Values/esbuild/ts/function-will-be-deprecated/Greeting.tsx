/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface GreetingProps {
  name?: string;
}

const Greeting = (props: GreetingProps) => <h1>Hello {props.name}!</h1>;
Greeting.defaultProps = { name: 'World' };

export default Greeting;
