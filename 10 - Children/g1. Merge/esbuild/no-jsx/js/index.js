/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.js';
import SpecialList from './SpecialList.js';

const root = createRoot(document.getElementById('root'));
root.render(
  createElement(
    SpecialList,
    null,
    createElement(Greeting, { name: 'Alexandra' }),
    createElement(Greeting, { name: 'Benjamin' }),
    createElement(Greeting, { name: 'Charlotte' })
  )
);
