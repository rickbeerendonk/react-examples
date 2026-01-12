/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2022 Rick Beerendon      !*/

import { createRoot } from 'react-dom/client';

import CustomContent from './CustomContent.tsx';
import GreetingEditor from './GreetingEditor.tsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root') as Element);
root.render(
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
