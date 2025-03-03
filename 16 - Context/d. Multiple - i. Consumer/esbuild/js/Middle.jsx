/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import BackgroundContext from './BackgroundContext.js';
import Bottom from './Bottom.jsx';

function Middle() {
  return (
    // React 19+: <ColorContext> is enough, no Provider needed.
    <BackgroundContext.Provider value={{ color: 'lightgray' }}>
      <Bottom />
    </BackgroundContext.Provider>
  );
}

export default Middle;
