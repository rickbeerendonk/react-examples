/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import GreetingEditor from './GreetingEditor.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <GreetingEditor.Text />
    <GreetingEditor.Input />
  </>
);
