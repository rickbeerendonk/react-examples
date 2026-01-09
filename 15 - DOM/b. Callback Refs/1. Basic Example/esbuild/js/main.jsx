/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import HelloWorld from './HelloWorld.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<HelloWorld />);
