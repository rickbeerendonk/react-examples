/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Sum from './Sum.jsx';

createRoot(document.getElementById('root')).render(
  <Sum first={1} second={2} />
);
