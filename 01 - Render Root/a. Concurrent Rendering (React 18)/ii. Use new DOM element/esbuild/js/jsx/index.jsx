/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

const root = createRoot(rootElem);
root.render(<h1>Hello React {React.version}!</h1>);
