/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { lazy, Suspense, useState } from 'react';

// Default

const GreetingDefault = lazy(() =>
  import('./GreetingDefault.jsx').then(module => module)
);

// Named

function superLazy(moduleName, exportName) {
  return lazy(() =>
    import(moduleName).then(module => ({ default: module[exportName] }))
  );
}
const GreetingNamed = superLazy('./GreetingNamed.jsx', 'Greeting');

// Use

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <GreetingDefault />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <GreetingNamed />
          </Suspense>
        </div>
      )}
    </>
  );
}
