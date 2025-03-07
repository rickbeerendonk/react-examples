/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import App from './App.jsx';
import Home from './routes/Home.jsx';
import Page1 from './routes/Page1.jsx';
import Page2 from './routes/Page2.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="page1/*" element={<Page1 />} />
        <Route path="page2/*" element={<Page2 />} />

        {/* Prefer handling this on the server with HTTP code 301 (or 308) */}
        <Route path="oldpage2/*" element={<Navigate replace to="/page2" />} />
      </Route>
    </Routes>
  </HashRouter>
);
