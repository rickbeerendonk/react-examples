/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.tsx';

const props = {
  count: 3,
  name: 'React'
};

const root = createRoot(document.getElementById('root')!);
root.render(<Greeting {...props} />);
