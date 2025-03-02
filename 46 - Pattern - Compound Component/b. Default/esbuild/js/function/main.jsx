/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import GreetingEditor from './GreetingEditor.jsx';

createRoot(document.getElementById('root')).render(
  <GreetingEditor>
    {/* 
      // - Children can optionally be specified, because there is a default
      // - f.e. If you want a different order than the default
      
      <GreetingEditor.Text />
      <GreetingEditor.Input />
      */}
  </GreetingEditor>
);
