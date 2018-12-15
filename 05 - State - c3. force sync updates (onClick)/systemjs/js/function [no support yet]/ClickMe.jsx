/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

// SystemJS limitation (we should be able to do this directly in import)
const { useState } = React;

function ClickMe() {
  const [count, setCount] = useState(0);

  return (
    <a
      onClick={() => {
        ReactDOM.flushSync(() => setCount(count + 0.4));
        ReactDOM.flushSync(() => setCount(count + 0.6));
      }}
    >
      {`This link has been clicked ${count} times`}
    </a>
  );
}

export default ClickMe;