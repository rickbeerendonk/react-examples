/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom/client';

import ImportantAnchor from './ImportantAnchor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ImportantAnchor
    href="http://www.reactjs.com"
    rel="noopener noreferrer"
    target="_blank"
    title="Everything about React"
  >
    React website
  </ImportantAnchor>
);
