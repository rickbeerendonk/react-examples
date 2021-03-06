/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // Pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App() {
  return (
    <HashRouter>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
        </nav>
      </header>

      <main>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}

export default App;
