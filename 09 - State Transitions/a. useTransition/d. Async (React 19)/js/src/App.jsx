/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useState, useTransition } from 'react';

import { slowAddAsync } from './utils/index.js';

export default function App() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    // Async function supported since React 19
    startTransition(async () => {
      //console.log('Adding 1 to', count);
      const newCount = await slowAddAsync(count);
      //console.log('Added 1 to', count, 'result:', newCount);
      setCount(newCount);
    });
  }

  return (
    <button onClick={handleClick}>
      Change count {isPending ? '[calculating...]' : count}
    </button>
  );
}
