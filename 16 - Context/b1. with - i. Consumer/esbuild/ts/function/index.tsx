/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { createRoot } from 'react-dom/client';

import Top from './Top.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(<Top color="red" />);
