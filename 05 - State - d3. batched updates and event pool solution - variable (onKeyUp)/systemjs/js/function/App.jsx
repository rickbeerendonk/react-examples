/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function App() {
  const [pressed, setPressed] = React.useState('');

  function handleKeyUp(e) {
    const key = e.key;
    setPressed(pressed => pressed + key);
  }

  return (
    <React.Fragment>
      <input autoFocus onKeyUp={handleKeyUp} />
      <div>Pressed: {pressed}</div>
    </React.Fragment>
  );
}

export default App;
