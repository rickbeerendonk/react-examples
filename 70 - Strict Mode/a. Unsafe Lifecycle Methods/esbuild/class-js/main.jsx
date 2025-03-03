/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

setTimeout(() => root.unmount(), 100);
