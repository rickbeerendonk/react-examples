/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

ReactDOM.render(
  React.createElement('h1', null, 'Hello React ', React.version, '!'),
  rootElem
);