/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

const Greeting: React.SFC<IGreetingProps> = ({ name = 'World' }) => (
  <h1>Hello {name}!</h1>
);

export default Greeting;
