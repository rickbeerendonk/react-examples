/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React, { useState } from 'react';

function ClickMe() {
  const [count, setCount]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);

  return (
    // setState is not called when the event takes place.
    // The result of setState() is called when the event takes place.
    <button onClick={/* () => */ setCount(count + 1)}>
      This button has been clicked {count} times
    </button>
  );
}

export default ClickMe;
