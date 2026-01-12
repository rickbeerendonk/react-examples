/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import GreetingEditor from './GreetingEditor.jsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(<GreetingEditor />);
