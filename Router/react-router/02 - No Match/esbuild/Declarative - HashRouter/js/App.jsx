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
          <Link to="page1">Page 1</Link>
          <Link to="page2">Page 2</Link>
          <Link to="page404">Page 404</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>My copyright</footer>
    </>
  );
}
