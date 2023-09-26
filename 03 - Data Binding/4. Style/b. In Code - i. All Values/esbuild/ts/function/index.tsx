/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk     !*/

import React, { createRoot } from 'react-dom/client';

import App from './App.tsx';

const root = createRoot(document.getElementById('root') as Element);
root.render(<App />);
