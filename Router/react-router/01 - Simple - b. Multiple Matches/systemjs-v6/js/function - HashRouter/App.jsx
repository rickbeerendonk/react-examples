/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <HashRouter>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="/page-one">Page One</Link>
          <Link to="/page2">Page 2</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page1/*" element={<Page1 />} />
          <Route path="page-one/*" element={<Page1 />} />
          <Route path="page2/*" element={<Page2 />} />
        </Routes>
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}

export default App;
