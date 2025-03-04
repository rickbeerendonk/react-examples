/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import useIsDocumentHidden from './hooks/document-hidden.js';

export default function App() {
  const isHidden = useIsDocumentHidden();
  //console.log('App: ', isHidden);
  return <h1>Document is {isHidden ? 'Hidden' : 'Visible'}!</h1>;
}
