/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';

function HelloWorld() {
  return createElement(
    'h1',
    { ref: ref => (ref.innerHTML = 'Hello <u>React</u>!!!') },
    'Hello World!'
  );
}

export default HelloWorld;
