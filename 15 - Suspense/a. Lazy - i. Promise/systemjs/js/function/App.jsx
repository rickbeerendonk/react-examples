/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';

const Greeting = React.lazy(() =>
  Promise.resolve({ default: () => <p>Greeting!</p> })
);

function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Greeting />
        </React.Suspense>
      )}
    </React.Fragment>
  );
}

export default App;
