/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import GreetingEditor from './GreetingEditor';

ReactDOM.render(
  <GreetingEditor>
    {/* 
      // - Children can optionally be specified, because there is a default
      // - f.e. If you want a different order than the default
      
      <GreetingEditor.Text />
      <GreetingEditor.Input />
      */}
  </GreetingEditor>,
  document.getElementById('root')
);
