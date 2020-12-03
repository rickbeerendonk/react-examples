/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Switch from './Switch';
import Bottom from './Bottom';

function Middle() {
  return (
    <React.Fragment>
      <Bottom />
      <Switch />
    </React.Fragment>
  );
}

export default Middle;
