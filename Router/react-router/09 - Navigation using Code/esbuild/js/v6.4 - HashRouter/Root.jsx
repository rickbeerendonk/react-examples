/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  function handleNavigate(e) {
    navigate(e.target.dataset.url);
  }

  return (
    <>
      <header>
        <h1>App</h1>
        <nav>
          <button onClick={handleNavigate} data-url="/">
            Home
          </button>
          <button onClick={handleNavigate} data-url="/page1">
            Page 1
          </button>
          <button onClick={handleNavigate} data-url="/page2">
            Page 2
          </button>
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
