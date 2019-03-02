/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <BrowserRouter>
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
        <div style={{ color: 'darkgray' }}>Router 4.4+</div>
        <Route exact path="/" component={Home} />
        <Route path={['/page1', '/page-one']} component={Page1} />
        <Route path="/page2" render={props => <Page2 {...props} />} />
      </main>

      <footer>My copyright</footer>
    </BrowserRouter>
  );
}

export default App;
