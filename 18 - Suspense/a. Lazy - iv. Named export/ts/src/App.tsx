/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { lazy, Suspense, useState, ComponentType } from 'react';

// Default

const GreetingDefault = lazy(() => import('./GreetingDefault.tsx'));

// Named

function superLazy(moduleName: string, exportName: string) {
  return lazy(() =>
    import(moduleName).then(module => ({
      default: module[exportName] as ComponentType
    }))
  );
}
const GreetingNamed = superLazy('./GreetingNamed.tsx', 'Greeting');

// Use

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setVisible(v => !v)}>
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
