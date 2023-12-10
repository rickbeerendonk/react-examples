/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import useToggle from './hooks/toggle.js';

let oldToggle = undefined;

function App() {
  const [value, toggle] = useToggle();

  if (oldToggle && oldToggle !== toggle) {
    throw new Error('toggle function is recreated.');
  }

  oldToggle = toggle;

  return (
    <>
      <input type="checkbox" autoFocus onChange={toggle} checked={value} />
      {` => ${value}`}
    </>
  );
}

export default App;
