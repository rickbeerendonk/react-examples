/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function ClickMe() {
  const [count, setCount] = useState(0);

  return (
    // setCount is not called when the event takes place.
    // Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
    <button onClick={/* () => */ setCount(count + 1)}>
      This button has been clicked {count} times
    </button>
  );
}

export default ClickMe;
