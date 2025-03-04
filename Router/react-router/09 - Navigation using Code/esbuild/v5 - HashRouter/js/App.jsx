/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/
import { Route, useHistory } from 'react-router-dom';

import Home from './Home.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';

export default function App() {
  const history = useHistory();

  function navigate(e) {
    history.push(e.target.dataset.url);
  }

  return (
    <>
      <header>
        <h1>App</h1>
        <nav>
          <button onClick={navigate} data-url="/">
            Home
          </button>
          <button onClick={navigate} data-url="/page1">
            Page 1
          </button>
          <button onClick={navigate} data-url="/page2">
            Page 2
          </button>
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
    </>
  );
}
