/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greetings from './Greetings';

ReactDOM.render(
  <Greetings names={['Alexandra', 'Benjamin', 'Charlotte']} />,
  document.getElementById('app')
);
