/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import {
  Suspense,
  unstable_SuspenseList as SuspenseList,
  useState
} from 'react';

import Spinner from './Spinner.jsx';
import AsyncResult from './AsyncResult.jsx';

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  function load() {
    setButtonClicked({ buttonClicked: true });
  }

  return (
    <>
      <button onClick={load}>Load</button>
      {buttonClicked && (
        <ol>
          <SuspenseList revealOrder="forwards">
            <li value="1">
              <Suspense fallback={<Spinner name="one" />}>
                <AsyncResult name="one" time={2000} />
              </Suspense>
            </li>
            <li value="2">
              <Suspense fallback={<Spinner name="two" />}>
                <AsyncResult name="two" time={3000} />
              </Suspense>
            </li>
            <li value="3">
              <Suspense fallback={<Spinner name="three" />}>
                <AsyncResult name="three" time={1000} />
              </Suspense>
            </li>
          </SuspenseList>
        </ol>
      )}
    </>
  );
}

export default App;
