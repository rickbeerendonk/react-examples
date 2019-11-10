/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

const Greeting = React.forwardRef(function(props, ref) {
  return React.createElement(
    'div',
    { className: 'hello' },
    React.createElement('h1', { ref }, 'Hello ', props.name, '!')
  );
});
Greeting.displayName = 'Greeting';

export default Greeting;
