/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2022 Rick Beerendon      !*/

import React from 'react';
import ReactDOM from 'react-dom/client';

import GreetingEditor from './GreetingEditor';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <GreetingEditor>
    {/* Children MUST be specified, because there is no default */}
    <GreetingEditor.Text />
    <GreetingEditor.Input />
  </GreetingEditor>
);
