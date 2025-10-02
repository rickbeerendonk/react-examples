/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useState, useTransition } from 'react';

import { slowAdd } from './utils/index.js';

export default function App() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    // Slow operation, but useTransition() prevents blocking the UI
    startTransition(() => setCount(c => slowAdd(c)));
  }

  return (
    <button onClick={handleClick}>
      Change count {isPending ? '[calculating...]' : count}
    </button>
  );
}
