/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function Dangerous() {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html:
          '<a href="javascript:alert(\'Will be impossible soon.\')">Dangerous</a>'
      }}
    />
  );
}

export default Dangerous;
