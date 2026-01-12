/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import ColorContext from './ColorContext.js';
import Middle from './Middle.jsx';

function Top(props) {
  return (
    // React 19+: <ColorContext> is enough, no Provider needed.
    <ColorContext.Provider value={{ color: props.color }}>
      <Middle />
    </ColorContext.Provider>
  );
}

export default Top;
