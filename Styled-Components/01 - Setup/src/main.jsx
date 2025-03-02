/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import GreetingEditor from './GreetingEditor';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.createRoot(root).render(<GreetingEditor />);
