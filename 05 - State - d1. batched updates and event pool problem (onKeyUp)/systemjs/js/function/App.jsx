/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const [pressed, setPressed] = React.useState('');

  function handleKeyUp(e) {
    setPressed(p => p + e.key);
  }

  return (
    <React.Fragment>
      <input autoFocus onKeyUp={handleKeyUp} />
      <div>Pressed: {pressed}</div>
    </React.Fragment>
  );
}

export default App;
