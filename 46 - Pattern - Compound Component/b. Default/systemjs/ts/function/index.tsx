/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2022 Rick Beerendon      !*/

import React from 'react';
import ReactDOM from 'react-dom/client';

import GreetingEditor from './GreetingEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GreetingEditor>
    {/* 
      // - Children can optionally be specified, because there is a default
      // - f.e. If you want a different order than the default
      
      <GreetingEditor.Text />
      <GreetingEditor.Input />
      */}
  </GreetingEditor>
);
