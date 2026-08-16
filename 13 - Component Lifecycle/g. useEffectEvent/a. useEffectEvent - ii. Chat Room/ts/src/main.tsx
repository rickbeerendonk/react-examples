/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import ChatRoom from './App.tsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root')!);
root.render(<ChatRoom />);
