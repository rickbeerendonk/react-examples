/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import { createElement, version } from 'react';
import { render } from 'react-dom';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

render(createElement('h1', null, 'Hello React ', version, '!'), rootElem);
