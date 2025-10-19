/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { lazy, Suspense, useState } from 'react';

import Fallback from './Fallback.jsx';

//import Greeting from './Greeting.jsx';
const Greeting = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      import('./Greeting.jsx').then(r => resolve(r));
    }, 2000);
  });
});

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <Suspense fallback={<Fallback delay={1000} />}>
          <Greeting />
        </Suspense>
      )}
    </>
  );
}
