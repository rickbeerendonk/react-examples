/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM, ReactRouterDOM */

const { BrowserRouter, Route, Link } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter basename="/Router%20-%2005%20-%20Dynamic%20Routing/runtime/js/function/">
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

function Page({ match }) {
  return <h2>Page {match.params.id}</h2>;
}

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);
