/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          {Array.from([1, 2, 3, 4, 5], i => (
            <Link key={i} to={`page/${i}`}>
              Page {i}
            </Link>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>My copyright</footer>
    </>
  );
}
