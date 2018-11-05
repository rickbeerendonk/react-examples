/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const Fetching = () =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement('img', {
      src: '../../../../resources/oblicum-square.svg',
      className: 'oblicum-spinner',
      alt: 'Fetching...'
    }),
    'Fetching...'
  );

export default Fetching;
