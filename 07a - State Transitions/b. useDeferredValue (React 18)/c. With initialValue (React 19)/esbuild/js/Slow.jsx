/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { memo } from 'react';

function Slow({ name }) {
  console.log('Slow component rendered with:', name);

  // Simulate slow rendering
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Artificial delay
  }

  return <div>Hello {name || '(empty)'}!</div>;
}

export default memo(Slow);
