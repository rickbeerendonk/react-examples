/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Suspense, useState } from 'react';

import Spinner from './Spinner.jsx';
import AsyncResult from './AsyncResult.jsx';

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  function load() {
    setButtonClicked(true);
  }

  return (
    <>
      <button onClick={load}>Load</button>
      {buttonClicked && (
        <div>
          <Suspense fallback={<Spinner />}>
            <AsyncResult />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
