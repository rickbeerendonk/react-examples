/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import ColorContext from './ColorContext.js';
import Middle from './Middle.jsx';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

    this.handleSwitch = this.handleSwitch.bind(this);
  }
  handleSwitch() {
    this.setState(state => ({
      color: state.color === 'red' ? 'blue' : 'red'
    }));
  }
  render() {
    return (
      // React 19+: <ColorContext> is enough, no Provider needed.
      <ColorContext.Provider
        value={{ color: this.state.color, handleSwitch: this.handleSwitch }}
      >
        <Middle />
      </ColorContext.Provider>
    );
  }
}

export default Top;
