/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React, { Component } from 'react';

class ImportantAnchor extends Component<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> {
  render() {
    const { children, ...otherProps } = this.props;
    return <a {...otherProps}>!!! {children} !!!</a>;
  }
}

export default ImportantAnchor;
