/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { lazy, Suspense, useEffect, useState } from 'react';

//import Greeting from './Greeting.tsx';
const getGreeting = () => import('./Greeting.tsx');
const Greeting = lazy(getGreeting);

function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Preload Greeting
    getGreeting();
  }, []);

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
