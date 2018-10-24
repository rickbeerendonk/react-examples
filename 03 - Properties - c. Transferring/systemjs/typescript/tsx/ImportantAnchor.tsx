/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

class ImportantAnchor extends React.Component<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  undefined
> {
  render() {
    const { children, ...props } = this.props;
    return <a {...props}>!!! {children} !!!</a>;
  }
}

export default ImportantAnchor;
