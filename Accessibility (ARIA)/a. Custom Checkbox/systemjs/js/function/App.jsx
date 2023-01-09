/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import CheckBox from './CheckBox';

function App() {
  const [checked, setChecked] = React.useState(false);

  function handleCheck(value) {
    setChecked(value);
  }

  return (
    <React.Fragment>
      <CheckBox onChange={handleCheck} checked={checked} />
    </React.Fragment>
  );
}

export default App;
