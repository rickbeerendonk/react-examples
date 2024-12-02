/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import Greeting from './Greeting';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(<Greeting />);
