import React from 'react';

import MousePosition from './MousePosition';

function App() {
  const [visible, setVisible] = React.useState(true);

  function handleShowHide() {
    setVisible(v => !v);
  }

  return (
    <React.Fragment>
      <button onClick={handleShowHide}>{visible ? 'Hide' : 'Show'}</button>
      {visible && <MousePosition />}
    </React.Fragment>
  );
}

export default App;
