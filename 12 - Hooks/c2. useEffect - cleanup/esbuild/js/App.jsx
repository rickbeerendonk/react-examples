/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

import MousePosition from './MousePosition.jsx';

function App() {
  const [visible, setVisible] = useState(true);

  function handleShowHide() {
    setVisible(v => !v);
  }

  return (
    <>
      <button onClick={handleShowHide}>{visible ? 'Hide' : 'Show'}</button>
      {visible && <MousePosition />}
    </>
  );
}

export default App;
