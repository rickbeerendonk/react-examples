/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2022 Rick Beerendon      !*/

import React from 'react';
import ReactDOM from 'react-dom';

import GreetingEditor from './GreetingEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GreetingEditor>
    <div style={{ backgroundColor: 'lightgray' }}>
      <GreetingEditor.Text />
    </div>
    <GreetingEditor.Input />
  </GreetingEditor>
);
