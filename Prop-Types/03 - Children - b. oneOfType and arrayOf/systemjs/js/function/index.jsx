/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

ReactDOM.render(
  <div>
    <List>{/* legal */}</List>

    <List>
      <span>Legal 1</span>
    </List>

    <List>
      <span>Legal 2</span>
      <span>Legal 3</span>
    </List>

    <List>{123 /* problem */}</List>
  </div>,
  document.getElementById('root')
);
