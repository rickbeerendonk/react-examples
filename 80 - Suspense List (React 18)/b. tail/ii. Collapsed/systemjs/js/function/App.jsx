/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Spinner from './Spinner';
import AsyncResult from './AsyncResult';

function App() {
  const [buttonClicked, setButtonClicked] = React.useState(false);

  function load() {
    setButtonClicked({ buttonClicked: true });
  }

  return (
    <>
      <button onClick={load}>Load</button>
      {buttonClicked && (
        <ol>
          <React.unstable_SuspenseList revealOrder="forwards" tail="collapsed">
            <li value="1">
              <React.Suspense fallback={<Spinner name="one" />}>
                <AsyncResult name="one" time={2000} />
              </React.Suspense>
            </li>
            <li value="2">
              <React.Suspense fallback={<Spinner name="two" />}>
                <AsyncResult name="two" time={3000} />
              </React.Suspense>
            </li>
            <li value="3">
              <React.Suspense fallback={<Spinner name="three" />}>
                <AsyncResult name="three" time={1000} />
              </React.Suspense>
            </li>
          </React.unstable_SuspenseList>
        </ol>
      )}
    </>
  );
}

export default App;
