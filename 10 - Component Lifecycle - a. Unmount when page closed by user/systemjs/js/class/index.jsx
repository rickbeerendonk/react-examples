/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './Parent';

const node = document.getElementById('app');

ReactDOM.render(<Parent />, node);

window.addEventListener('beforeunload', () =>
  ReactDOM.unmountComponentAtNode(node)
);
