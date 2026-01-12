/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.tsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(<Greeting />);
