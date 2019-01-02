/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */

import React from 'react';

function Child(props) {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    // Batched:
    setCount(c => {
      console.log('getValue: Child - first');
      return c + 0.6;
    });

    if (props.onClick) {
      props.onClick();
    }

    setCount(c => {
      console.log('getValue: Child - second');
      return c + 0.4;
    });
  };

  /* eslint no-console:"off" */
  // Render will be called once!
  console.log('render: Child');

  return (
    <a onClick={handleClick}>
      <div>{`Parent count: ${props.count}`}</div>
      <div>{`Child count: ${count}`}</div>
    </a>
  );
}

export default Child;
