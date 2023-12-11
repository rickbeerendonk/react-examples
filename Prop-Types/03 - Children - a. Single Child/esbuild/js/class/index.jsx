/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import List from './List.jsx';

createRoot(document.getElementById('root')).render(
  <List>
    <span>Legal</span>
    <span>Illegal</span>
  </List>
);
