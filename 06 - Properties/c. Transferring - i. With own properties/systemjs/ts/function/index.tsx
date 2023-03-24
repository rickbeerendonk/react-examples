/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom/client';

import ImportantAnchor from './ImportantAnchor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ImportantAnchor
    highlight="!!!"
    href="https://react.dev"
    rel="noopener"
    target="_blank"
    title="Everything about React"
  >
    React website
  </ImportantAnchor>
);
