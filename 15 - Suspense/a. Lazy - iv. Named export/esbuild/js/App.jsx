/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { lazy, Suspense, useState } from 'react';

//import { Greeting } from './Greeting.jsx';

const Greeting = lazy(() => import('./Greeting.jsx').then(module => module));

/*
function superLazy(moduleName, exportName) {
  return lazy(() =>
    import(moduleName).then(module => ({ default: module[exportName] }))
  );
}
const Greeting = superLazy('./Greeting', 'Greeting');
*/

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
