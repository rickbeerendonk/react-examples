/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import ClickMe from './ClickMe.jsx';

const root = document.createElement('div');
document.body.appendChild(root);

createRoot(root).render(<ClickMe />);
