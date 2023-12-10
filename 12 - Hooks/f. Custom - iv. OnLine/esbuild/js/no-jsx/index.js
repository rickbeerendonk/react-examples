/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(createElement(App));
