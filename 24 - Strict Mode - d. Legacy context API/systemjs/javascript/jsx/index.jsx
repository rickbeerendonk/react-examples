/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import One from './One';

ReactDOM.render(
  <React.StrictMode>
    <One color="red" />
  </React.StrictMode>,
  document.getElementById('app')
);
