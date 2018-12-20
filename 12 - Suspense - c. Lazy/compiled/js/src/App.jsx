/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

const Greeting = React.lazy(() => import('./Greeting'));

function App() {
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

export default App;
