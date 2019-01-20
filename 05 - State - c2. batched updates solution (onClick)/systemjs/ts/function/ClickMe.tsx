/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function ClickMe(): JSX.Element {
  const [count, setCount]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = React.useState(0);

  const handleClick = () => {
    // Updates are batched for performance reasons.
    // Therefore a callback should be used:
    setCount(c => c + 0.4);
    setCount(c => c + 0.6);
  };

  return (
    <a onClick={handleClick}>{`This link has been clicked ${count} times`}</a>
  );
}

export default ClickMe;
