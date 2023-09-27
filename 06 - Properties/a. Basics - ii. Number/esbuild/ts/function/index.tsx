/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk     !*/

import React from 'react';
import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(<Greeting name="World" count={3} />);
