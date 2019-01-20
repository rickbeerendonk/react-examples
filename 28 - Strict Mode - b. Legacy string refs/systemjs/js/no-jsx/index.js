/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './HelloWorld';

ReactDOM.render(
  React.createElement(React.StrictMode, null, React.createElement(HelloWorld)),
  document.getElementById('app')
);
