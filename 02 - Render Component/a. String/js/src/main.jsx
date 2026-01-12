/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.js';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(<Greeting />);
