/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import Page from './Page';

function App() {
  return (
    <HashRouter>
      <React.Fragment>
        <header>
          <h1>App</h1>
          <ul>
            {Array.from([1, 2, 3, 4, 5], i => (
              <li key={i}>
                <Link to={`/${i}`}>Page {i}</Link>
              </li>
            ))}
          </ul>
        </header>

        <main>
          <Route path="/:id" component={Page} />
        </main>

        <footer>My copyright</footer>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
