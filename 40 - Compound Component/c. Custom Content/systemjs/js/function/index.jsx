/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import CustomContent from './CustomContent';
import GreetingEditor from './GreetingEditor';

ReactDOM.render(
  <GreetingEditor>
    <CustomContent />
    <GreetingEditor.Input />
  </GreetingEditor>,
  document.getElementById('app')
);
