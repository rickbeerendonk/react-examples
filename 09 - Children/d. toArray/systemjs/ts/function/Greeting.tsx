/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface GreetingProps {
  name: string;
}

function Greeting(props: GreetingProps) {
  return <i>Hello {props.name}</i>;
}

export default Greeting;
