/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

const root = ReactDOM.createRoot(rootElem);
root.render(<h1>Hello React {React.version}!</h1>);
