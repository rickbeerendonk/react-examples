/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { createRoot } from 'react-dom/client';

import ClickMe from './ClickMe.tsx';

const root = createRoot(document.getElementById('root') as Element);
root.render(<ClickMe />);
