/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import NoMatch from './NoMatch';
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
          <Link to="/page2">Page 2</Link>
          <Link to="/page404">Page 404</Link>
        </nav>
      </header>

      <main>
        {/* A <Switch> renders the first child <Route> that matches. 
            A <Route> with no path always matches. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}

export default App;
