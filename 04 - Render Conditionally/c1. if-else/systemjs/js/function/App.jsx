/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const show = false;

  return (
    <React.Fragment>
      <h3>Conditional:</h3>
      {show ? <div>Invisible</div> : <div>Visible</div>}
    </React.Fragment>
  );
}

export default App;
