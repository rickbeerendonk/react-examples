/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ColorContext from './ColorContext.js';
import Bottom from './Bottom.jsx';

function Top() {
  return (
    <ColorContext.Provider value={{ color: 'blue' }}>
      <Bottom />
    </ColorContext.Provider>
  );
}

export default Top;
