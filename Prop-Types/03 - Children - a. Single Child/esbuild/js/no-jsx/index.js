/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import List from './List.js';

createRoot(document.getElementById('root')).render(
  createElement(
    List,
    null,
    createElement('span', null, 'Legal'),
    createElement('span', null, 'Illegal')
  )
);
