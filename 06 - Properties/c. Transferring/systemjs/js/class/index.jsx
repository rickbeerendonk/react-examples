/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import ImportantAnchor from './ImportantAnchor';

ReactDOM.render(
  <ImportantAnchor
    href="http://www.reactjs.com"
    rel="noopener noreferrer"
    target="_blank"
    title="Everything about React"
  >
    React website
  </ImportantAnchor>,
  document.getElementById('root')
);
