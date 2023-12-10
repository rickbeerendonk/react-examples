/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { lazy, Suspense, useState } from 'react';

const Greeting = lazy(() =>
  Promise.resolve({ default: () => <p>Greeting!</p> })
);

function App() {
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

export default App;
