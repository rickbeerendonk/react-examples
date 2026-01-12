/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

export default function LifecycleComponent({ title }) {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Component mounted
    setMounted(true);
    console.log('Component mounted');

    return () => {
      // Component unmounting
      console.log('Component unmounting');
    };
  }, []);

  useEffect(() => {
    // Component updated (count changed)
    console.log('Count updated:', count);
  }, [count]);

  return (
    <div>
      <h2>{title}</h2>
      <p data-testid="mounted-status">
        {mounted ? 'Component is mounted' : 'Component not mounted'}
      </p>
      <p data-testid="count-display">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        data-testid="increment-button"
      >
        Increment
      </button>
    </div>
  );
}
