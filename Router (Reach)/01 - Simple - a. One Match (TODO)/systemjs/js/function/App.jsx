/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { Router, Link } from '@reach/router';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="">Home</Link>
          <Link to="page1">Page 1</Link>
          <Link to="page2">Page 2</Link>
        </nav>
      </header>

      <main>
        <Router basepath="Router%20(Reach)/01%20-%20Simple%20-%20a.%20One%20Match/systemjs/js/function">
          <Home default />
          <Page1 path="/page1" />
          <Page2 path="/page2" />
        </Router>
      </main>

      <footer>My copyright</footer>
    </React.Fragment>
  );
}

export default App;
