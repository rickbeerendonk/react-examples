/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import React from './react.development.mjs';
import { createRoot } from './react-dom.development.mjs';

const root = createRoot(document.getElementById('root'));
root.render(<h1>Hello React {React.version}!</h1>);
