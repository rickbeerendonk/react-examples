/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { lazy, Suspense, useState } from 'react';

//import Greeting from './Greeting.jsx';
const Greeting = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      import('./Greeting.jsx').then(r => resolve(r));
    }, 2000);
  });
});

function App() {
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

export default App;
