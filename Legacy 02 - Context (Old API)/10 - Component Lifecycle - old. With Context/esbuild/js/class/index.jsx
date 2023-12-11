/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { logEvent } from './utils.js';

logEvent('-- add component --', 'action');
const root = createRoot(document.getElementById('root'));
root.render(<App />);

logEvent('-- remove component --', 'action');
root.unmount();
