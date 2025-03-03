/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Dangerous from './Dangerous.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Dangerous />
  </StrictMode>
);
