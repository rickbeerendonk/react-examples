/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function Parent({ children }) {
  return (
    <>
      <h2>Parent (not the owner)</h2>
      {children}
    </>
  );
}

export default Parent;
