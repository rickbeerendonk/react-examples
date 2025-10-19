/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useState } from 'react';

import DocumentHidden from './DocumentHidden.tsx';

export default function App() {
  const [visible, setVisible] = useState(true);

  function handleShowHide() {
    setVisible(v => !v);
  }

  return (
    <>
      <button onClick={handleShowHide}>{visible ? 'Hide' : 'Show'}</button>
      {visible && <DocumentHidden />}
    </>
  );
}
