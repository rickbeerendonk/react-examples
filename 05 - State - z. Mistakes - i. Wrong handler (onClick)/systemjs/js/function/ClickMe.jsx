/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function ClickMe() {
  const [count, setCount] = React.useState(0);

  return (
    // setState is not called when the event takes place.
    // The result of setState() is called when the event takes place.
    <a onClick={/* () => */ setCount(count + 1)}>
      This link has been clicked {count} times
    </a>
  );
}

export default ClickMe;
