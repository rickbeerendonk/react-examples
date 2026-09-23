/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import useIsDocumentHidden from './hooks/document-hidden.ts';

export default function App() {
  const isHidden = useIsDocumentHidden();

  return (
    <>
      <title>{isHidden ? 'Hidden' : 'Visible'}</title>
      <h1>Document is {isHidden ? 'Hidden' : 'Visible'}!</h1>
    </>
  );
}
