/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk     !*/

import React from 'react';

interface IGreetingProps {
  count: number;
  name: string;
}

const Greeting: React.FC<IGreetingProps> = props => (
  <h1>
    Hello{' '}
    {Array(props.count)
      .fill(props.name)
      .join(' ')}
    !
  </h1>
);

export default Greeting;
