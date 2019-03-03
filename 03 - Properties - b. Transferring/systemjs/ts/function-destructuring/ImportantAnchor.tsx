/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function ImportantAnchor({
  children,
  ...otherProps
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...otherProps}>!!! {children} !!!</a>;
}

export default ImportantAnchor;
