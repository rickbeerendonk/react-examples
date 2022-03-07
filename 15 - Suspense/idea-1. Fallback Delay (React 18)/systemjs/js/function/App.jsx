/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

import Fallback from './Fallback';

//import Greeting from './Greeting';
const Greeting = React.lazy(() => import('./Greeting'));

function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <React.Suspense fallback={<Fallback />}>
          <Greeting />
        </React.Suspense>
      )}
    </React.Fragment>
  );
}

export default App;
