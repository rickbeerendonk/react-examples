/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { jsx } from 'react/jsx-runtime';

interface GreetingProps {
  name: string;
}

function Greeting(props: GreetingProps) {
  return jsx('h1', {
    children: ['Hello ', props.name, '!']
  });
}

export default Greeting;
