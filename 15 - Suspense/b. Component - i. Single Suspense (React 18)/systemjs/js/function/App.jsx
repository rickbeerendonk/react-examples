/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import Scheduler from 'scheduler';

import Spinner from './Spinner';
import AsyncResult from './AsyncResult';

function App() {
  const [buttonClicked, setButtonClicked] = React.useState(false);

  function load() {
    setButtonClicked(true);
  }

  return (
    <React.Fragment>
      <button onClick={load}>Load</button>
      {buttonClicked && (
        <div>
          <React.Suspense fallback={<Spinner />}>
            <AsyncResult />
          </React.Suspense>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
