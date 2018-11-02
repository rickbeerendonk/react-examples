/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

// SystemJS limitation (we should be able to do this directly in import)
const { useState } = React;

function ClickMe() {
  const [count, setCount] = useState(0);

  return (
    <a
      onClick={() => {
        setCount(count + 0.5);
        setCount(count + 0.5);
      }}
    >
      {`This link has been clicked ${count} times`}
    </a>
  );
}

export default ClickMe;
