/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import './oblicum.css';

import Greeting from './Greeting.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<Greeting name="World" />);
