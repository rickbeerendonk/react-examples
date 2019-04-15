/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  // jsxS = Static (where jsx() function is dynamic):
  // https://github.com/facebook/react/blob/master/packages/react/src/React.js#L121
  return React.jsxs('h1', { children: ['Hello ', props.name, '!'] });
}

export default Greeting;
