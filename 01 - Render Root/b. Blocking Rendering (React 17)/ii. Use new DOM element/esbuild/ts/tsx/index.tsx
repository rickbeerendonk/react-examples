/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import { version } from 'react';
import { render } from 'react-dom';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

render(<h1>Hello React {version}!</h1>, rootElem);
