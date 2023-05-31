/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';

import DocumentHidden from './DocumentHidden';

function App() {
  const [visible, setVisible] = React.useState(true);

  function handleShowHide() {
    setVisible(v => !v);
  }

  return (
    <React.Fragment>
      <button onClick={handleShowHide}>{visible ? 'Hide' : 'Show'}</button>
      {visible && <DocumentHidden />}
    </React.Fragment>
  );
}

export default App;