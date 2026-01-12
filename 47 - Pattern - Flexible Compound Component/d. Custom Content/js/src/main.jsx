/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import CustomContent from './CustomContent.jsx';
import GreetingEditor from './GreetingEditor.jsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <GreetingEditor>
    <div style={{ backgroundColor: 'lightgray' }}>
      <CustomContent />
    </div>
    <GreetingEditor.Input />
  </GreetingEditor>
);
