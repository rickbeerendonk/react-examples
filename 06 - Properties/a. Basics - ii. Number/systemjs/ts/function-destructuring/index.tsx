/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk     !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';

ReactDOM.render(
  <Greeting name="World" count={3} />,
  document.getElementById('root')
);
