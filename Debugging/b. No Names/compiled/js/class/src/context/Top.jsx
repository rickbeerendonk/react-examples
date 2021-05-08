/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ColorContext from './ColorContext';
import Bottom from './Bottom';

export default function () {
  return (
    <ColorContext.Provider value={{ color: 'blue' }}>
      <Bottom />
    </ColorContext.Provider>
  );
}
