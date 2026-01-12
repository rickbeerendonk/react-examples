/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import BackgroundContext from './BackgroundContext.js';
import Bottom from './Bottom.jsx';

function Middle() {
  return (
    <BackgroundContext value={{ color: 'lightgray' }}>
      <Bottom />
    </BackgroundContext>
  );
}

export default Middle;
