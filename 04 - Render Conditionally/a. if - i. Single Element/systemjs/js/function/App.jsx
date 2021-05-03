/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const show = true;

  return (
    <>
      <h3>Conditional:</h3>
      {show && <div>Visible</div>}
    </>
  );
}

export default App;
