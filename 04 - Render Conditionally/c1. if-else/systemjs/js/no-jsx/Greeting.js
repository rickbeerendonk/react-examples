/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h3', null, 'Greeting:'),
    // Change render based on name:
    props.name
      ? React.createElement('div', null, 'Hello ', props.name, '!')
      : React.createElement(
          'div',
          { style: { color: 'red' } },
          'No name provided.'
        )
  );
}

export default Greeting;
