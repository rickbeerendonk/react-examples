/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement, forwardRef } from 'react';

const Greeting = forwardRef(function (props, ref) {
  return createElement(
    'div',
    { className: 'hello' },
    createElement('h1', { ref }, 'Hello ', props.name, '!')
  );
});
Greeting.displayName = 'Greeting';

export default Greeting;
