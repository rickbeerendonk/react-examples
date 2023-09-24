/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import { createElement, version } from 'react';
import { createRoot } from 'react-dom/client';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

const root = createRoot(rootElem);
root.render(createElement('h1', null, 'Hello React ', version, '!'));
