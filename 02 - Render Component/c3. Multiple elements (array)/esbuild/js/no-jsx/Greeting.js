/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

import { createElement } from 'react';

function Greeting() {
  return [
    createElement('h1', { key: 'heading' }, 'Hello World!'),
    'What do you think about React?',
    createElement('div', { key: 'enthusiasm' }, 'It looks amazing.')
  ];
}

export default Greeting;
