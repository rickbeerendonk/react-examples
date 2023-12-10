/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.jsx';

createRoot(document.getElementById('root')).render(
  <Greeting style={{ background: 'orange', color: 'blue' }} />
);
