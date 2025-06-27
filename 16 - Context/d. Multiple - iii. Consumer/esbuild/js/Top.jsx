/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import ColorContext from './ColorContext.js';
import Middle from './Middle.jsx';

function Top({ color }) {
  return (
    // React 19+: <ColorContext> is enough, no Provider needed.
    <ColorContext.Provider value={{ color }}>
      <Middle />
    </ColorContext.Provider>
  );
}

export default Top;
