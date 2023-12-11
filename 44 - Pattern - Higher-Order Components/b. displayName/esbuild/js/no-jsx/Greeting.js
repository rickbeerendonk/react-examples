/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';

function Greeting({ name }) {
  return createElement('h1', null, 'Hello ', name, '!');
}

export default Greeting;
