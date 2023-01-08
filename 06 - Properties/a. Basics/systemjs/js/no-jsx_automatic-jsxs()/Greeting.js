/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Runtime from 'react/jsx-runtime';
const { jsxs } = Runtime;

function Greeting(props) {
  return jsxs('h1', {
    children: ['Hello ', props.name, '!']
  });
}

export default Greeting;
