/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import GreetingEditor from './GreetingEditor';

ReactDOM.render(
  <GreetingEditor>
    {/* Children MUST be specified, because there is no default */}
    <GreetingEditor.Text />
    <GreetingEditor.Input />
  </GreetingEditor>,
  document.getElementById('root')
);
