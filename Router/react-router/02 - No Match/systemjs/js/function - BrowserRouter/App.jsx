/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import NoMatch from './NoMatch';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <BrowserRouter basename="Router/02%20-%20No%20Match/systemjs/js/function%20-%20BrowserRouter">
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
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route component={NoMatch} />
        </Switch>
      </main>

      <footer>My copyright</footer>
    </BrowserRouter>
  );
}

export default App;
