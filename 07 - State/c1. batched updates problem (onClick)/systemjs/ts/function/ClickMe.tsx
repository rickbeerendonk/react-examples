/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

const ClickMe: React.FC = () => {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    // Updates are batched for performance reasons.
    // Therefore this won't work:
    setCount(count + 0.4);
    setCount(count + 0.6);
  }

  return <a onClick={handleClick}>This link has been clicked {count} times</a>;
};

export default ClickMe;
