/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { jsx } from 'react/jsx-runtime';

function App() {
  const elem = 'h1';
  return jsx(elem, { children: 'Hello World!' });
}

export default App;
