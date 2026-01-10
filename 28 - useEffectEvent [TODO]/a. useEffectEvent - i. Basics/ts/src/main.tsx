/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
