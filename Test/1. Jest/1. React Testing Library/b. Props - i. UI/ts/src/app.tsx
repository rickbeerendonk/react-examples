/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import Greeting from './Greeting';

const root = document.createElement('div');
document.body.appendChild(root);

createRoot(root).render(<Greeting name="World" />);
