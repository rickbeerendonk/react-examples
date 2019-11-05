/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h3', null, 'Greeting:'),
    // Only render when a not-name is falsy:
    !props.name || React.createElement('h1', null, 'Hello ', props.name, '!')
  );
}

export default Greeting;
