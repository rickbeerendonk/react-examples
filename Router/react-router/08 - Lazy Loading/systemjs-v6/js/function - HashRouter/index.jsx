/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Home from './routes/Home';
const Page1 = React.lazy(() => import('./routes/Page1'));
const Page2 = React.lazy(() => import('./routes/Page2'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route
          path="page1/*"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Page1 />
            </React.Suspense>
          }
        />
        <Route
          path="page2/*"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Page2 />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  </HashRouter>
);
