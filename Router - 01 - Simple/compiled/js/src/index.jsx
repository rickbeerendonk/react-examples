import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/// Simple ///

function App() {
  return (
    <Router>
      <>
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
          </ul>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </main>

        <footer>My copyright</footer>
      </>
    </Router>
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
