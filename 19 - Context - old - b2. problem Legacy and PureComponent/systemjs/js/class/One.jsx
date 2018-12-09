/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import PropTypes from 'prop-types';
import React from 'react';

import Two from './Two';

class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

    this.onSwitch = this.onSwitch.bind(this);
  }
  getChildContext() {
    return { color: this.state.color };
  }
  onSwitch() {
    this.setState(state => ({
      color: state.color === 'red' ? 'green' : 'red'
    }));
  }
  render() {
    return (
      <React.Fragment>
        <Two />
        <button onClick={this.onSwitch}>Switch color</button>
      </React.Fragment>
    );
  }
}
One.childContextTypes = {
  color: PropTypes.string
};

export default One;
