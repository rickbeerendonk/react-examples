/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import CustomContent from './CustomContent';
import GreetingEditor from './GreetingEditor';

ReactDOM.render(
  <GreetingEditor>
    {/* 
      Custom content should support the same properties
      as the standard content in order to receive data
      or event handlers.
    */}
    <CustomContent />
    <GreetingEditor.Input />
  </GreetingEditor>,
  document.getElementById('root')
);
