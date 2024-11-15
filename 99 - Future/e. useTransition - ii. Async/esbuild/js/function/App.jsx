/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useState, useTransition } from 'react';

import { slowAddAsync } from './utils/index.js';

function App() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    // Async function
    startTransition(async () => {
      const newCount = await slowAddAsync(count);
      setCount(newCount);
    });
  }

  return (
    <button onClick={handleClick}>
      Change count {isPending ? '[calculating...]' : count}
    </button>
  );
}

export default App;
