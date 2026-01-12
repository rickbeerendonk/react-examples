/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useState, startTransition } from 'react';

import { slowAdd } from './utils/index.js';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // Slow operation, but startTransition() prevents blocking the UI
    startTransition(() =>
      setCount(c => {
        console.log('Adding 1 to', c);
        const result = slowAdd(c);
        console.log('Added 1 to', c, 'result:', result);
        return result;
      })
    );
  }

  return <button onClick={handleClick}>Change count {count}</button>;
}
