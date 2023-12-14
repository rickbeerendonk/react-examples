/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/
import { HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom';

import Home from './Home.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';

function App() {
  return (
    <HashRouter>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/oldpage2">Old Page 2</Link>
        </nav>
      </header>

      <main>
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
          {/* Redirect from can only be used inside Switch */}
          <Redirect from="/oldpage2" to="/page2" />
        </Switch>
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}

export default App;
