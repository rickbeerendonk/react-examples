/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
