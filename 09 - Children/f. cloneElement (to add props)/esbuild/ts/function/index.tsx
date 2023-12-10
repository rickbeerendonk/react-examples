/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.tsx';
import List from './List.tsx';

const root = createRoot(document.getElementById('root') as Element);
root.render(
  <List greet="Hello">
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" greet="Good morning" />
  </List>
);
