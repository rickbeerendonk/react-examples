/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState, Suspense } from 'react';

import Spinner from './Spinner.jsx';
import AsyncResult from './AsyncResult.jsx';

export default function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  function load() {
    setButtonClicked(true);
  }

  return (
    <>
      <button onClick={load}>Load</button>
      {buttonClicked && (
        <div>
          <h2>Level 1</h2>
          <Suspense fallback={<Spinner name="1" />}>
            <AsyncResult name="1" time="1000" />
            <h3>Level 2 (first)</h3>
            <Suspense fallback={<Spinner name="2.1" />}>
              <AsyncResult name="2.1" time="3000" />
            </Suspense>
            <h3>Level 2 (second)</h3>
            <Suspense fallback={<Spinner name="2.2" />}>
              <AsyncResult name="2.2" time="2000" />
            </Suspense>
          </Suspense>
        </div>
      )}
    </>
  );
}
