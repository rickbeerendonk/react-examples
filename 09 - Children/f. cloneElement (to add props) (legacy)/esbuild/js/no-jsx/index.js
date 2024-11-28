/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.js';
import List from './List.js';

createRoot(document.getElementById('root')).render(
  createElement(
    List,
    { greeting: 'Hello' },
    createElement(Greeting, { name: 'Alexandra' }),
    createElement(Greeting, { name: 'Benjamin' }),
    createElement(Greeting, {
      name: 'Charlotte',
      greeting: 'Good Morning'
    })
  )
);
