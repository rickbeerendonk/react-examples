/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const myRef = React.useRef();
  const id = 1;
  return (
    <React.Fragment>
      <div draggable={true} />
      <div key={id} />
      <div ref={myRef} />
      <div data-key={id} />
    </React.Fragment>
  );
}

export default App;
