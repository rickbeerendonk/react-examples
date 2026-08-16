/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NavLink, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>
        <h1>App</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="page1">Page 1</NavLink>
          <NavLink to="page2">Page 2</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>My copyright</footer>
    </>
  );
}

export default Root;
