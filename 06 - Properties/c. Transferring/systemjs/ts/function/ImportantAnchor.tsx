/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

const ImportantAnchor: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> =
  ({ children, ...otherProps }) => <a {...otherProps}>!!! {children} !!!</a>;

export default ImportantAnchor;
