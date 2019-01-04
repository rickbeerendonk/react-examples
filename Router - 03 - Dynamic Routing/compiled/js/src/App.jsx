/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Page from './Page';

function App() {
  return (
    <BrowserRouter>
      <>
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
      </>
    </BrowserRouter>
  );
}

export default App;
