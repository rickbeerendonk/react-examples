/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ColorContext from './ColorContext.ts';
import Bottom from './Bottom.tsx';

function Top() {
  return (
    <ColorContext.Provider value={{ color: 'blue' }}>
      <Bottom />
    </ColorContext.Provider>
  );
}

export default Top;
