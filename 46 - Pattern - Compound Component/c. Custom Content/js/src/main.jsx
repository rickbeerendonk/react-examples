/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import './oblicum.css';

import CustomContent from './CustomContent.jsx';
import GreetingEditor from './GreetingEditor.jsx';

createRoot(document.getElementById('root')).render(
  <GreetingEditor>
    {/* 
      Custom content should support the same properties
      as the standard content in order to receive data
      or event handlers.
    */}
    <CustomContent />
    <GreetingEditor.Input />
  </GreetingEditor>
);
