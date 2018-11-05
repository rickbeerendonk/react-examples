/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

class ImportantAnchor extends React.Component {
  render() {
    const { children, ...otherProps } = this.props;
    return <a {...otherProps}>!!! {children} !!!</a>;
  }
}

export default ImportantAnchor;
