/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function ImportantAnchor({ children, ...otherProps }) {
  return React.createElement('a', otherProps, '!!! ', children, ' !!!');
}

export default ImportantAnchor;
