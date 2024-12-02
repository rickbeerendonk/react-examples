/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

/* eslint-disable react-compiler/react-compiler */

function ClickMe() {
  const [count, setCount] = useState(0);

  return (
    // setCount is not called when the event takes place.
    // The result of setCount() is called when the event takes place.
    <button onClick={/* () => */ setCount(count + 1)}>
      This button has been clicked {count} times
    </button>
  );
}

export default ClickMe;
