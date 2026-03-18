/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const root = document.getElementById('root');
document.body.appendChild(root);

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
