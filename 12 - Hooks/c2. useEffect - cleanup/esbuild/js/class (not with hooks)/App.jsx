import React from 'react';

import MousePosition from './MousePosition.jsx';

function App() {
  const [visible, setVisible] = React.useState(true);

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
