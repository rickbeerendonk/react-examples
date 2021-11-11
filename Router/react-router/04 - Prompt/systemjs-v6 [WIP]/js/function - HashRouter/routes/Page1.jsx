/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
//import { useBlocker } from 'react-router-dom';

function Page1() {
  //useBlocker('Are you sure you want to leave?', true /* when */);

  return (
    <>
      <h2>1st page (with prompt)</h2>
      <p>
        <a href="https://github.com/remix-run/react-router/issues/8139">
          Is not implemented (yet) in v6.
        </a>
      </p>
    </>
  );
}

export default Page1;
