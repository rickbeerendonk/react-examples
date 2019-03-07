/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function ClickMe() {
  const [count, setCount] = React.useState(0);

  return (
    <a onClick={/* () => */ setCount(count + 1)}>
      This link has been clicked {count} times
    </a>
  );
}

export default ClickMe;
