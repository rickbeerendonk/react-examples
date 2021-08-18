/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import GreetingEditor from './GreetingEditor';

ReactDOM.render(
  <GreetingEditor>
    <div style={{ backgroundColor: 'lightgray' }}>
      <GreetingEditor.Text />
    </div>
    <GreetingEditor.Input />
  </GreetingEditor>,
  document.getElementById('root')
);
