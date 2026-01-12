/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { version } from 'react';
import { createRoot } from 'react-dom/client';
import './oblicum.css';

import GreetingEditor from './GreetingEditor.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<GreetingEditor greeting="Hello" />);
