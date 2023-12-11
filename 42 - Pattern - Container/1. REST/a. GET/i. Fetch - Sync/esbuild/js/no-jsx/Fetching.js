/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement, Fragment } from 'react';

function Fetching() {
  return createElement(
    Fragment,
    null,
    createElement('img', {
      src: '../../../../../../../resources/oblicum-square.svg',
      className: 'oblicum-spinner',
      alt: 'Fetching...'
    }),
    'Fetching...'
  );
}

export default Fetching;
