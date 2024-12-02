/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import GreetingEditor from './GreetingEditor';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(<GreetingEditor />);
