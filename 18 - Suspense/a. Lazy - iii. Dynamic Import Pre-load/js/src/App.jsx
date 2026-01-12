/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { lazy, Suspense, useEffect, useState } from 'react';

//import Greeting from './Greeting.jsx';
const getGreeting = () => import('./Greeting.jsx');
const Greeting = lazy(getGreeting);

export default function App() {
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
