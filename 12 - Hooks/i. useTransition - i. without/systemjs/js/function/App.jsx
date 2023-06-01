/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';

import { slowAdd } from './utils/index';

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    // Slow operation, but we don't use useTransition() to prevent blocking UI
    // (although old result is displayed)
    setCount(c => slowAdd(c));
  }

  return <button onClick={handleClick}>Change count {count}</button>;
}

export default App;
