/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import HelloWorld from './HelloWorld.tsx';
import './index.css';

const root = createRoot(document.getElementById('root') as Element);
root.render(<HelloWorld />);
