/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement, Fragment } from 'react';

function Greeting() {
  return createElement(
    Fragment,
    null,
    createElement('h1', null, 'Hello World!'),
    'What do you think about React?',
    createElement('div', null, 'It looks amazing.')
  );
}

export default Greeting;
