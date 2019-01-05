/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

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
