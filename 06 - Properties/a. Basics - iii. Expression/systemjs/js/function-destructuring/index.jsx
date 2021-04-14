/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';

ReactDOM.render(
  <Greeting
    greeting={new Date().getHours() < 12 ? 'Good morning' : 'Hello'}
    name="World"
  />,
  document.getElementById('app')
);
