/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { startTransition, useOptimistic, useState } from 'react';

import { slowAddAsync } from './utils/index.js';

export default function Counter() {
  const [count, setCount] = useState(0); // Confirmed
  const [optimisticCount, optimisticAdd] = useOptimistic(
    count,
    (state, value) => state + value
  ); // Optimistic

  function increment() {
    optimisticAdd(1); // Show optimistic update immediately

    // Use startTransition to mark the update as non-urgent
    startTransition(async () => {
      const newCount = await slowAddAsync(count);
      setCount(newCount);
    });
  }

  return (
    <>
      <button onClick={increment}>Count: {optimisticCount}</button>
      <p>(confirmed: {count})</p>
      <p>(optimistic: {optimisticCount})</p>
    </>
  );
}
