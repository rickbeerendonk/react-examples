/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ColorContext from './ColorContext.js';
import Middle from './Middle.jsx';
import Bottom from './Bottom.jsx';

function Top({ color }) {
  return (
    <>
      <ColorContext.Provider value={{ color: 'blue' }}>
        <ColorContext.Provider value={{ color }}>
          <Middle />
        </ColorContext.Provider>

        <Bottom />
      </ColorContext.Provider>

      <Bottom />
    </>
  );
}

export default Top;
