/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2022 Rick Beerendon      !*/

import { createRoot } from 'react-dom/client';

import CustomContent from './CustomContent.tsx';
import GreetingEditor from './GreetingEditor.tsx';

const root = createRoot(document.getElementById('root') as Element);
root.render(
  <GreetingEditor>
    <div style={{ backgroundColor: 'lightgray' }}>
      <CustomContent />
    </div>
    <GreetingEditor.Input />
  </GreetingEditor>
);
