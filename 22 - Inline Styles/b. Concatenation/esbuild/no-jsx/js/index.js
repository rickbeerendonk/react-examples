/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.js';

createRoot(document.getElementById('root')).render(
  createElement(Greeting, {
    style: { background: 'orange', color: 'blue' }
  })
);
