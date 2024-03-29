/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import { Component } from 'react';

import Two from './Two.jsx';

class One extends Component {
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

export default One;
