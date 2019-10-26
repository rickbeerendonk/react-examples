/* eslint no-console: 0 */

/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk, Oblicum !*/

import React from 'react';

function App() {
  let [value, setValue] = React.useState(false);

  function handleClick() {
    console.log('value (before): ', value);

    // Only leads to re-render if count has changed since previous render.
    // - value is updated here (wrong)
    // - setValue is called with the result of an assignment
    setValue((value = !value));

    console.log('value (after): ', value);
  }

  return <a onClick={handleClick}>Value: {String(value)}</a>;
}

export default App;
