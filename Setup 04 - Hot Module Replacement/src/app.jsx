/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import GreetingEditor from './GreetingEditor.jsx';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
  <GreetingEditor />,
  root
);
