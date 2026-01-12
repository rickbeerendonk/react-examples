/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import GreetingEditor from './GreetingEditor.jsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <GreetingEditor>
    {/* Children MUST be specified, because there is no default */}
    <GreetingEditor.Text />
    <GreetingEditor.Input />
  </GreetingEditor>
);
