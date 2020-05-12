/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ClickMe from './ClickMe';

// Observe that after clicking the button, the ClickMe component
// is recreated, due to having a different key, with its initial state.

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(c => c + 1);
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>Click me!</button>
      <br />
      <ClickMe key={count} />
    </React.Fragment>
  );
}

export default App;
