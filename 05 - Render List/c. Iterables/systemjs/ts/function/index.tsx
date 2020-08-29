/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

ReactDOM.render(
  <List names={new Set(['A', 'B', 'C'])} />,
  document.getElementById('app')
);
