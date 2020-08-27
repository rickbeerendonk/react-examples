/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function Child(props) {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    // Batched:
    setCount(c => c + 1);

    if (props.onClick) {
      props.onClick();
    }
  }

  /* eslint no-console:"off" */
  // Render will be called once!
  console.log('Child rendered: ' + Date());
  return (
    <React.Fragment>
      <button onClick={handleClick}>
        <div>{`Parent count: ${props.count}`}</div>
        <div>{`Child count: ${count}`}</div>
      </button>
      <p>
        Open console to see that a property and a state change in quick
        succession only lead to one rerender.
      </p>
    </React.Fragment>
  );
}

export default Child;
