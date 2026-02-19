/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2024 Rick Beerendonk          !*/

import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import Home from './routes/Home.jsx';
const Page1 = lazy(() => import('./routes/Page1.jsx'));
const Page2 = lazy(() => import('./routes/Page2.jsx'));

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route
          path="page1/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Page1 />
            </Suspense>
          }
        />
        <Route
          path="page2/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Page2 />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
