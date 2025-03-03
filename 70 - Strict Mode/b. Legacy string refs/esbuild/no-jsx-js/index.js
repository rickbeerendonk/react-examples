/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import HelloWorld from './HelloWorld.js';

createRoot(document.getElementById('root')).render(
  createElement(StrictMode, null, createElement(HelloWorld))
);
