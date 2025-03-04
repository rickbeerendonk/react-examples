/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { lazy, Suspense, useState } from 'react';

const Greeting = lazy(
  () =>
    new Promise(resolve =>
      setTimeout(() => resolve({ default: () => <p>Greeting!</p> }), 1000)
    )
);

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <Suspense fallback={<div>Loading...</div>}>
          <Greeting />
        </Suspense>
      )}
    </>
  );
}
