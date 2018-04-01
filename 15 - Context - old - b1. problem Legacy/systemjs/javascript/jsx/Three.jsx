/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import PropTypes from 'prop-types';
import React from 'react';

export default class Three extends React.Component {
  render() {
    return <h1 style={{ color: this.context.color }}>Three</h1>;
  }
}
Three.contextTypes = {
  color: PropTypes.string
}
