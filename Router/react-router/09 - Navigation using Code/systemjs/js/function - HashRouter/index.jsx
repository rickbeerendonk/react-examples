/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
