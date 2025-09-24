/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useState, startTransition } from 'react';

import { slowAdd } from './utils/index.js';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // Slow operation, but startTransition() prevents blocking the UI
    startTransition(() => setCount(c => slowAdd(c)));
  }

  return <button onClick={handleClick}>Change count {count}</button>;
}
