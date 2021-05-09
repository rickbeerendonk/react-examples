/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

import Fallback from './Fallback';

//import Greeting from './Greeting';
const Greeting = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      import('./Greeting').then(r => resolve(r));
    }, 2000);
  });
});

function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <React.Suspense fallback={<Fallback delay={1000} />}>
          <Greeting />
        </React.Suspense>
      )}
    </React.Fragment>
  );
}

export default App;
