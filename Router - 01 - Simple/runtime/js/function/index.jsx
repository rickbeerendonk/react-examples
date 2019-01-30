/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM, ReactRouterDOM */

const { HashRouter, Route, Link } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <>
        <header>
          <h1>App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/page1">Page 1</Link>
            <Link to="/page2">Page 2</Link>
          </nav>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" render={props => <Page2 {...props} />} />
        </main>

        <footer>My copyright</footer>
      </>
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

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);
