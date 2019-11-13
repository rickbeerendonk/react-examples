/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';
import SpecialList from './SpecialList';

ReactDOM.render(
  React.createElement(
    SpecialList,
    null,
    React.createElement(Greeting, { name: 'Alexandra' }),
    React.createElement(Greeting, { name: 'Benjamin' }),
    React.createElement(Greeting, { name: 'Charlotte' })
  ),
  document.getElementById('app')
);
