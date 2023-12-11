/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import List from './List.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <List>{/* legal */}</List>

    <List>
      <span>Legal 1</span>
    </List>

    <List>
      <span>Legal 2</span>
      <span>Legal 3</span>
    </List>

    <List>{123 /* problem */}</List>
  </div>
);
