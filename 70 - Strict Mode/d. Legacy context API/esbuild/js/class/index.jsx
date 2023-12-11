/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import One from './One.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <One color="red" />
  </StrictMode>
);
