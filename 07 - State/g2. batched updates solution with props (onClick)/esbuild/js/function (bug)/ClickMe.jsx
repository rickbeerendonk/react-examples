/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function ClickMe({ value, setValue }) {
  const latestValue = React.useRef();
  latestValue.current = value;

  const [count, setCount] = React.useState(0);

  function handleClick() {
    // Updates are batched for performance reasons.
    // PROBLEM:
    // - In class components, the Parent class will render before setState callback is called
    // - In function components, "setState" callback is called before render.
    //   That invalidates "latestValue = useRef" as a solution.

    // Set property
    setValue(0.4);

    // Use property to set state
    setCount(c => {
      //debugger;
      return c + 0.6 + latestValue.current;
    });
  }

  return (
    <button onClick={handleClick}>
      This button has been clicked {count} times
    </button>
  );
}

export default ClickMe;
