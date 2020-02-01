/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM, ReactRouterDOM */

const { HashRouter, Route, Link, Switch, useRouteMatch } = ReactRouterDOM;

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Page1() {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <h2>1st page</h2>

      <nav>
        <ul>
          <li>
            <Link to={path}>Subpage 1</Link>
          </li>
          <li>
            <Link to={path + '/sub2'}>Subpage 2</Link>
          </li>
          <li>
            <Link to={path + '/sub3'}>Subpage 3</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={path + '/sub2'}>
          <SubPage2 />
        </Route>
        <Route path={path + '/sub3'}>
          <SubPage3 />
        </Route>
        <Route path={path}>
          <SubPage1 />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

function Page2() {
  return <h2>2nd page</h2>;
}

function SubPage1() {
  return <h3>Subpage 1</h3>;
}

function SubPage2() {
  return <h3>Subpage 2</h3>;
}

function SubPage3() {
  return <h3>Subpage 3</h3>;
}

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);
