/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM, ReactRouterDOM */

const { HashRouter, Prompt, Route, Link } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1 (with prompt)</Link>
          <Link to="/page2">Page 2</Link>
        </nav>
      </header>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </main>

      <footer>My copyright</footer>
    </HashRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Page1() {
  return (
    <>
      <Prompt when={true} message="Are you sure you want to leave?" />

      <h2>1st page (with prompt)</h2>
    </>
  );
}

function Page2() {
  return <h2>2nd page</h2>;
}

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);
