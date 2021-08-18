/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';
import List from './List';

ReactDOM.render(
  React.createElement(
    List,
    { greeting: 'Hello' },
    React.createElement(Greeting, { name: 'Alexandra' }),
    React.createElement(Greeting, { name: 'Benjamin' }),
    React.createElement(Greeting, {
      name: 'Charlotte',
      greeting: 'Good Morning'
    })
  ),
  document.getElementById('root')
);
