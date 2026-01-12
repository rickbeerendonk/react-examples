/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import GreetingEditor from './containers/GreetingEditor';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

const root = ReactDOM.createRoot(rootElem);
root.render(<GreetingEditor />);
