/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useState } from 'react';

import MousePosition from './MousePosition.jsx';

export default function App() {
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
