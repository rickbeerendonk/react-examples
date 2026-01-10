/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import './oblicum.css';

import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
