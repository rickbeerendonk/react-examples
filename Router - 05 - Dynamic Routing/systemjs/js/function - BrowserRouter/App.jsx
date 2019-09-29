/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Page, { PageWithHooks } from './Page';

function App() {
  return (
    <BrowserRouter basename="/Router%20-%2005%20-%20Dynamic%20Routing/systemjs/js/function%20-%20BrowserRouter">
      <header>
        <h1>App</h1>
        <nav>
          {Array.from([1, 2, 3, 4, 5], i => (
            <Link key={i} to={`/${i}`}>
              Page {i}
            </Link>
          ))}
        </nav>
      </header>

      <main>
        <Route path="/:id" component={Page} />
        <Route path="/:id" component={PageWithHooks} />
      </main>

      <footer>My copyright</footer>
    </BrowserRouter>
  );
}

export default App;
