/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';

ReactDOM.render(
  // See: https://github.com/reactjs/rfcs/pull/107
  React.jsx(Greeting, { name: 'World' }),
  document.getElementById('root')
);
