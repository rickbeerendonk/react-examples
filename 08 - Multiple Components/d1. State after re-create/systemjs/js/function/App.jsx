/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ClickMe from './ClickMe';

// Observe that after clicking the button twice,
// the ClickMe component is recreated with its initial state.

function App() {
  const [showClickMe, setShowClickMe] = React.useState(true);

  function handleClick() {
    setShowClickMe(scm => !scm);
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>Change visibility</button>
      <br />
      {showClickMe && <ClickMe />}
    </React.Fragment>
  );
}

export default App;
