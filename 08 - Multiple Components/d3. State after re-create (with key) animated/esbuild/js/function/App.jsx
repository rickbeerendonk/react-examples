/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useState } from 'react';
import { flushSync } from 'react-dom';

import ClickMe from './ClickMe.jsx';

// Observe that after clicking the button, the ClickMe component
// is recreated, due to having a different key, with its initial state.

function App() {
  const [id, setId] = useState(0);

  function handleClick() {
    document.startViewTransition(() => {
      flushSync(() => {
        setId(i => i + 1);
      });
    });
  }

  return (
    <>
      <button onClick={handleClick}>Change ID</button>
      <hr />
      <div className="keygroup">
        <ClickMe key={id} id={id} />
        <ClickMe key={id + 1} id={id + 1} />
      </div>
    </>
  );
}

export default App;
