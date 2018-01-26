/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import PropTypes from 'prop-types';
import React from 'react';

import Two from './Two';

export default class One extends React.Component {
  getChildContext() {
    return { color: this.props.color };
  }
  render() {
    return <Two />;
  }
}
One.childContextTypes = {
  color: PropTypes.string
};
