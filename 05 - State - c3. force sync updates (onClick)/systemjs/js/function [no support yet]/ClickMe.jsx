/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

function ClickMe() {
  const [count, setCount] = React.useState(0);

  return (
    <a
      onClick={() => {
        ReactDOM.flushSync(() => setCount(count + 0.4));
        ReactDOM.flushSync(() => setCount(count + 0.6));
      }}
    >
      This link has been clicked {count} times
    </a>
  );
}

export default ClickMe;
