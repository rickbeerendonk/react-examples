/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import type { AnchorHTMLAttributes } from 'react';

// Interface - allows declaration merging
// Not a type alias - types cannot be declaration merged
interface ImportantAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  highlight: string;
}

function ImportantAnchor({
  highlight,
  children,
  ...otherProps
}: ImportantAnchorProps) {
  return (
    <a {...otherProps}>
      {highlight} {children} {highlight}
    </a>
  );
}

export default ImportantAnchor;
