/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Suspense, lazy } from 'react';

const LazyComponent = lazy(
  () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            default: () => (
              <div data-testid="lazy-content">Lazy Loaded Content</div>
            )
          }),
        100
      )
    )
);

export default function SuspenseDemo() {
  return (
    <div data-testid="suspense-wrapper">
      <h2>Suspense Demo</h2>
      <Suspense fallback={<div data-testid="fallback-content">Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
