/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import List_Fall from './List_Fall.jsx';
import List_Turn from './List_Turn.jsx';

const items = [
  { key: 1, text: 'One' },
  { key: 2, text: 'Two' },
  { key: 3, text: 'Three' }
];

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <List_Fall items={items} />
    <List_Turn items={items} />
  </>
);
