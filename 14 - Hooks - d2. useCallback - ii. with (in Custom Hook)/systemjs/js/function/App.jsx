/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import useToggle from './hooks/toggle';

let oldToggle = undefined;

function App() {
  const [value, toggle] = useToggle();

  if (oldToggle && oldToggle !== toggle) {
    throw new Error('toggle function is recreated.');
  }

  oldToggle = toggle;

  return (
    <React.Fragment>
      <input type="checkbox" autoFocus onChange={toggle} checked={value} />
      {` => ${value}`}
    </React.Fragment>
  );
}

export default App;
