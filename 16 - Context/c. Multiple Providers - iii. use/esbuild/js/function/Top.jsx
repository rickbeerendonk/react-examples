/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ColorContext from './ColorContext.js';
import Middle from './Middle.jsx';
import Bottom from './Bottom.jsx';

function Top({ color }) {
  return (
    // React 19+: <ColorContext> is enough, no Provider needed.
    <>
      <ColorContext value={{ color: 'blue' }}>
        <ColorContext value={{ color }}>
          <Middle />
        </ColorContext>

        <Bottom />
      </ColorContext>

      <Bottom />
    </>
  );
}

export default Top;
