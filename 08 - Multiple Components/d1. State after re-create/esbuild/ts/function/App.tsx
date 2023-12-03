/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

import ClickMe from './ClickMe.tsx';

// Observe that after clicking the button twice,
// the ClickMe component is recreated with its initial state.

function App() {
  const [showClickMe, setShowClickMe] = useState<boolean>(true);

  function handleClick() {
    setShowClickMe(scm => !scm);
  }

  return (
    <>
      <button onClick={handleClick}>Change visibility</button>
      <br />
      {showClickMe && <ClickMe />}
    </>
  );
}

export default App;
