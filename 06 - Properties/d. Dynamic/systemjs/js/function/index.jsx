/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';

const props = {
  count: 3,
  name: 'React'
};

ReactDOM.render(<Greeting {...props} />, document.getElementById('app'));
