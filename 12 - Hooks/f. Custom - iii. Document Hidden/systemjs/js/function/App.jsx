/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import useIsDocumentHidden from './hooks/document-hidden';

function App() {
  const isHidden = useIsDocumentHidden();
  //console.log('Component: ', isHidden);
  return <h1>Document is {isHidden ? 'Hidden' : 'Visible'}!</h1>;
}

export default App;
