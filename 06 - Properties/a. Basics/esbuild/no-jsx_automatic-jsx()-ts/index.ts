/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { jsx } from 'react/jsx-runtime';
import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.ts';

const root = createRoot(document.getElementById('root')!);
root.render(jsx(Greeting, { name: 'World' }));
