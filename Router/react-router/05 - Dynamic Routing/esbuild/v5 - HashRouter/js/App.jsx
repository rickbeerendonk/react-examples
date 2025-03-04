/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/
import { HashRouter, Route, Link } from 'react-router-dom';

import { Page } from './Page.jsx';

export default function App() {
  return (
    <HashRouter>
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
        <Route path="/:id">
          <Page />
        </Route>
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}
