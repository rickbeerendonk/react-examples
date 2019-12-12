/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

ReactDOM.render(
  <List
    items={[
      { key: 1, text: 'One' },
      { key: 2, text: 'Two' },
      { key: 3, text: 'Three' }
    ]}
  />,
  document.getElementById('app')
);
