/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';

function Greeting(props) {
  return createElement(
    'h1',
    { ref: props.forwardedRef },
    'Hello ',
    props.name,
    '!'
  );
}

export default Greeting;
