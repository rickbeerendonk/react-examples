/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Home from './routes/Home';
import Page from './routes/Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="page/:id" element={<Page />} />
      </Route>
    </Routes>
  </HashRouter>
);
