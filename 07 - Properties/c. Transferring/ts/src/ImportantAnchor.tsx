/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import type { AnchorHTMLAttributes } from 'react';

function ImportantAnchor({
  children,
  ...otherProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...otherProps}>!!! {children} !!!</a>;
}

export default ImportantAnchor;
