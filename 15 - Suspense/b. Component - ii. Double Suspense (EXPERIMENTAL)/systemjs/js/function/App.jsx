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
          <React.Suspense fallback={<Spinner />}>
            <React.Suspense>
              <AsyncResult />
            </React.Suspense>
          </React.Suspense>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
