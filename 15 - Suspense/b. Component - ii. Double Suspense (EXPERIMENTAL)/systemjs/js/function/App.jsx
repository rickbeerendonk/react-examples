/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import Scheduler from 'scheduler';

import Spinner from './Spinner';
import AsyncResult from './AsyncResult';

function App() {
  const [buttonClicked, setButtonClicked] = React.useState(false);

  function load() {
    // Async
    Scheduler.unstable_scheduleCallback(1, () => {
      setButtonClicked(true);
    });
  }

  return (
    <React.Fragment>
      <button onClick={load}>Load</button>
      {buttonClicked && (
        <div>
          <h2>Level 1</h2>
          <React.Suspense fallback={<Spinner name="1" />}>
            <AsyncResult name="1" time="1000" />
            <h3>Level 2 (first)</h3>
            <React.Suspense fallback={<Spinner name="2.1" />}>
              <AsyncResult name="2.1" time="3000" />
            </React.Suspense>
            <h3>Level 2 (second)</h3>
            <React.Suspense fallback={<Spinner name="2.2" />}>
              <AsyncResult name="2.2" time="2000" />
            </React.Suspense>
          </React.Suspense>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
