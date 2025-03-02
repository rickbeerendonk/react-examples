/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.jsx';
import List from './List.jsx';

const root = createRoot(document.getElementById('root'));
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
