/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Home from './routes/Home.jsx';
import Page from './routes/Page.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename="/">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="page/:id" element={<Page />} />
      </Route>
    </Routes>
  </HashRouter>
);
