/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { lazy, Suspense } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import Home from './Home.jsx';
const Page1 = lazy(() => import('./Page1.jsx'));
const Page2 = lazy(() => import('./Page2.jsx'));

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
        <div style={{ color: 'lightgray' }}>
          <em>Show this example with a Network Latency.</em>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Suspense>
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}

export default App;
