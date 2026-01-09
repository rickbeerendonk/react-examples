/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.tsx';
import List from './List.tsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root') as Element);
root.render(
  <List>
    <li>
      <Greeting name="Alexandra" />
    </li>
    <li>
      <Greeting name="Benjamin" />
    </li>
    <li>
      <Greeting name="Charlotte" />
    </li>
  </List>
);
