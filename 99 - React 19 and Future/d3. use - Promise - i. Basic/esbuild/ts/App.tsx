/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Suspense } from 'react';

import Value from './Value.tsx';

export default function App() {
  return (
    <>
      <h1>Demo</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Value />
      </Suspense>
    </>
  );
}
