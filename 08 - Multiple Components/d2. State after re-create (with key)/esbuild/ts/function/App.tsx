/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

import ClickMe from './ClickMe.tsx';

// Observe that after clicking the button, the ClickMe component
// is recreated, due to having a different key, with its initial state.

function App() {
  const [id, setId] = useState<number>(0);

  function handleClick() {
    setId(i => i + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Change ID</button>
      <br />
      <ClickMe key={id} />
      <ClickMe key={id + 1} />
    </>
  );
}

export default App;
