/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

//import Greeting from './Greeting.tsx';
const Greeting = React.lazy(() => import('./Greeting.tsx'));

export default function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Greeting />
        </React.Suspense>
      )}
    </>
  );
}
