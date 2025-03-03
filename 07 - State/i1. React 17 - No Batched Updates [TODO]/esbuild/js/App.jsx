/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function App() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(false);

  function changeReactEvent() {
    // React event is batched (in React 17 & 18):
    setValue1(v1 => v1 + 1);
    setValue2(v2 => !v2);
  }

  function changeNoReactEvent() {
    setTimeout(() => {
      // Other code is not batched in React 17
      //               but batched in React 18
      setValue1(v1 => v1 + 1);
      setValue2(v2 => !v2);
    }, 1);
  }

  console.log(`Render (value1 = ${value1}, value2 = ${value2.toString()})`);

  return (
    <>
      <div>
        {value1}. {value2.toString()}
      </div>
      <button onClick={changeReactEvent}>Trigger React Event change</button>
      <button onClick={changeNoReactEvent}>
        Trigger Non React Event change
      </button>
    </>
  );
}

export default App;
