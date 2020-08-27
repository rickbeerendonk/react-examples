/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

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

  // Render will be called once!
  console.log('render: Child');

  return (
    <button onClick={handleClick}>
      <div>{`Parent count: ${props.count}`}</div>
      <div>{`Child count: ${count}`}</div>
    </button>
  );
}

export default Child;
