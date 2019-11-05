/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';

ReactDOM.render(
  React.createElement(
    React.Fragment,
    null,
    React.createElement(Greeting, { name: 'Alexandra' }),
    React.createElement(Greeting),
    React.createElement(Greeting, { name: 'Benjamin' })
  ),
  document.getElementById('app')
);
