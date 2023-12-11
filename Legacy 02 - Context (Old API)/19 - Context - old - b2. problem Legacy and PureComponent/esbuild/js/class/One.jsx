/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import { Component } from 'react';

import Two from './Two.jsx';

class One extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

    this.handleSwitch = this.handleSwitch.bind(this);
  }
  getChildContext() {
    return { color: this.state.color };
  }
  handleSwitch() {
    this.setState(state => ({
      color: state.color === 'red' ? 'green' : 'red'
    }));
  }
  render() {
    return (
      <>
        <Two />
        <button onClick={this.handleSwitch}>Switch color</button>
      </>
    );
  }
}
One.childContextTypes = {
  color: PropTypes.string
};

export default One;
