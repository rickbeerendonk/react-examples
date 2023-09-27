/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const show = false;

  function component() {
    if (show) {
      return <Invisible />;
    }
    return <Visible />;
  }

  return (
    <>
      <h3>Conditional:</h3>
      {component()}
    </>
  );
}

function Invisible() {
  return <div>Invisible</div>;
}

function Visible() {
  return <div>Visible</div>;
}

export default App;
