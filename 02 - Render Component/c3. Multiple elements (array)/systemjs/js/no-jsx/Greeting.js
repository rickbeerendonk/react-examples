/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting() {
  return [
    React.createElement('h1', { key: 'heading' }, 'Hello World!'),
    'What do you think about React?',
    React.createElement('div', { key: 'enthusiasm' }, 'It looks amazing.')
  ];
}

export default Greeting;
