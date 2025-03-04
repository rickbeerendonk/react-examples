/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { lazy, Suspense, useState } from 'react';

import Fallback from './Fallback.jsx';

//import Greeting from './Greeting.jsx';
const Greeting = lazy(() => import('./Greeting.jsx'));

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <Suspense fallback={<Fallback />}>
          <Greeting />
        </Suspense>
      )}
    </>
  );
}
