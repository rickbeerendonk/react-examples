/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import Greeting from './Greeting.js';

createRoot(document.getElementById('root')!).render(
  <Greeting name="World" selected />
);
