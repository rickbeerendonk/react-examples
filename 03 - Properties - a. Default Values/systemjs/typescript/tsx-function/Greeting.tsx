/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

function Greeting(props: IGreetingProps): JSX.Element {
  return <h1>Hello {props.name}!</h1>;
}
Greeting.defaultProps = { name: 'World' };

export default Greeting;
