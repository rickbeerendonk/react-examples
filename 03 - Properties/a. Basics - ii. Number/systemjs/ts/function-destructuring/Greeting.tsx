/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk     !*/

import React from 'react';

interface IGreetingProps {
  count: number;
  name: string;
}

const Greeting: React.FC<IGreetingProps> = ({ count, name }) => (
  <h1>
    Hello{' '}
    {Array(count)
      .fill(name)
      .join(' ')}
    !
  </h1>
);

export default Greeting;
