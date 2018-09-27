/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';

const node = document.getElementById('app');

ReactDOM.render(<Greeting />, node);

window.addEventListener('beforeunload', () =>
  ReactDOM.unmountComponentAtNode(node)
);
