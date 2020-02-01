/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM, ReactRouterDOM */

const { HashRouter, Route, Switch, Link, useLocation } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <React.Fragment>
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
      </React.Fragment>
    </HashRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Page1() {
  return <h2>1st page</h2>;
}

function Page2() {
  return <h2>2nd page</h2>;
}

function NoMatch() {
  let location = useLocation();

  return (
    <React.Fragment>
      <h2>No match!</h2>
      <p>Location: {JSON.stringify(location)}</p>
    </React.Fragment>
  );
}

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);
