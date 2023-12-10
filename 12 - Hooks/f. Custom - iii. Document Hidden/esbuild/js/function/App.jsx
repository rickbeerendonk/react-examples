/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import useIsDocumentHidden from './hooks/document-hidden.js';

function App() {
  const isHidden = useIsDocumentHidden();
  //console.log('Hidden: ', isHidden);
  return <h1>Document is {isHidden ? 'Hidden' : 'Visible'}!</h1>;
}

export default App;
