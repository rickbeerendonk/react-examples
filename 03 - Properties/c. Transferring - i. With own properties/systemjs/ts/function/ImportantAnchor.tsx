/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface IImportantAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  highlight: string;
}

const ImportantAnchor: React.FC<IImportantAnchorProps> = ({
  highlight,
  children,
  ...otherProps
}) => (
  <a {...otherProps}>
    {highlight} {children} {highlight}
  </a>
);

export default ImportantAnchor;
