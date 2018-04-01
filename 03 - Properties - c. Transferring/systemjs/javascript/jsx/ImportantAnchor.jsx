/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class ImportantAnchor extends React.Component {
  render() {
    const {children, ...props} = this.props;
    return (
      <a {...props}>!!! {children} !!!</a>
    );
  }
}