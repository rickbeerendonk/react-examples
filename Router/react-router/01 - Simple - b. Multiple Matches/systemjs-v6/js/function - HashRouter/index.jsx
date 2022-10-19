/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Home from './routes/Home';
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="page1/*" element={<Page1 />} />
        <Route path="page-one/*" element={<Page1 />} />
        <Route path="page2/*" element={<Page2 />} />
      </Route>
    </Routes>
  </HashRouter>
);
