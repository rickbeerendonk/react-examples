/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { jsx } from 'react/jsx-runtime';

function Greeting(props) {
  return jsx('h1', {
    children: ['Hello ', props.name, '!']
  });
}

export default Greeting;
