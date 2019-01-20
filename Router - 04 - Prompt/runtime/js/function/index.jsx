/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM, ReactRouterDOM */

const { BrowserRouter, Prompt, Route, Link } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter basename="/Router%20-%2004%20-%20Prompt/runtime/js/function/">
      <>
        <header>
          <h1>App</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page 1 (with prompt)</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </main>

        <footer>My copyright</footer>
      </>
    </BrowserRouter>
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
