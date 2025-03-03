/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.js';
import { logEvent } from './utils.js';

logEvent('-- add component --', 'action');
const root = createRoot(document.getElementById('root'));
root.render(createElement(App));

setTimeout(() => {
  logEvent('-- remove component --', 'action');
  root.unmount();
}, 200);
