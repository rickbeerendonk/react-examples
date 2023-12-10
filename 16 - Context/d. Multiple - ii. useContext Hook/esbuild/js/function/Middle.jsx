/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import BackgroundContext from './BackgroundContext.jsx';
import Bottom from './Bottom.jsx';

function Middle() {
  return (
    <BackgroundContext.Provider value={{ color: 'lightgray' }}>
      <Bottom />
    </BackgroundContext.Provider>
  );
}

export default Middle;
