/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function ImportantAnchor({ highlight, children, ...otherProps }) {
  return React.createElement(
    'a',
    otherProps,
    highlight,
    ' ',
    children,
    ' ',
    highlight
  );
}

export default ImportantAnchor;
