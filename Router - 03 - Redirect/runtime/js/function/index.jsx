/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM, ReactRouterDOM */

const { BrowserRouter, Route, Redirect, Switch, Link } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter basename="Router%20-%2003%20-%20Redirect/runtime/js/function/">
      <React.Fragment>
        <header>
          <h1>App</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
            <li>
              <Link to="/oldpage2">Old Page 2</Link>
            </li>
          </ul>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            {/* Redirect from can only be used inside Switch */}
            <Redirect from="/oldpage2" to="/page2" />
          </Switch>
        </main>

        <footer>My copyright</footer>
      </React.Fragment>
    </BrowserRouter>
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

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);
