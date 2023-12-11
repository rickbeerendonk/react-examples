/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import HelloWorld from './HelloWorld.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
