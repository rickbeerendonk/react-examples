/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import React from './react.development.mjs';
import { createRoot } from './react-dom.development.mjs';

const root = createRoot(document.getElementById('root'));
root.render(
  React.createElement('h1', null, 'Hello React ', React.version, '!')
);
