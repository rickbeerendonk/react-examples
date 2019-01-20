/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

ReactDOM.render(
  React.createElement(
    List,
    null,
    React.createElement('span', null, 'Legal'),
    React.createElement('span', null, 'Illegal')
  ),
  document.getElementById('app')
);
