/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Fetching() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('img', {
      src: '../../../../../resources/oblicum-square.svg',
      className: 'oblicum-spinner',
      alt: 'Fetching...'
    }),
    'Fetching...'
  );
}

export default Fetching;
